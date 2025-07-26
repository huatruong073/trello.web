import { createContext, useState, useContext, type ReactNode } from 'react'

// Define the Auth context types
type User = {
    id: string
    name: string
    email: string
} | null

type AuthContextType = {
    user: User
    login: (email: string, password: string) => Promise<void>
    logout: () => void
    isLoading: boolean
}

// Create the Auth context
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Auth provider component
export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User>(null)
    const [isLoading, setIsLoading] = useState(false)

    // Mock login function
    const login = async (email: string, password: string) => {
        try {
            setIsLoading(true)
            // In a real app, this would be an API call
            await new Promise((resolve) => setTimeout(resolve, 1000))

            // Mock successful login
            setUser({
                id: '123',
                name: 'Demo User',
                email: email,
            })
        } finally {
            setIsLoading(false)
        }
    }

    // Logout function
    const logout = () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, isLoading }}>
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
