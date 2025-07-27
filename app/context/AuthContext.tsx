import { jwtDecode } from 'jwt-decode'
import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from 'react'
import { useNavigate } from 'react-router'
import type { ILoginResponse, IUserModel } from '~/+types/ums'

type AuthContextType = {
    user: IUserModel | null
    token: string | null
    login: (request: ILoginResponse) => Promise<void>
    logout: () => void
    isLoading: boolean
    isAuthenticated: boolean
}

// Create the Auth context
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Auth provider component
export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<IUserModel | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [token, setToken] = useState<string | null>(null)
    const navigate = useNavigate()

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken')
        const refreshToken = localStorage.getItem('refreshToken')
        if (accessToken && refreshToken) {
            setUser(jwtDecode(accessToken) as IUserModel)
            setToken(accessToken)
        }
        setIsLoading(false)
    }, [])

    const login = async (loginResponse: ILoginResponse) => {
        try {
            setIsLoading(true)
            if (loginResponse.Data.AccessToken) {
                setUser(jwtDecode(loginResponse.Data.AccessToken) as IUserModel)
                localStorage.setItem(
                    'accessToken',
                    loginResponse.Data.AccessToken
                )
                localStorage.setItem(
                    'refreshToken',
                    loginResponse.Data.RefreshToken
                )
                setToken(loginResponse.Data.AccessToken)
                navigate('/boards')
            }
            setIsLoading(false)
        } finally {
            setIsLoading(false)
        }
    }

    // Logout function
    const logout = () => {
        setUser(null)
        setToken(null)
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        navigate('/')
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                login,
                logout,
                isLoading,
                isAuthenticated: !!token,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

// Custom hook to use the auth context
export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}
