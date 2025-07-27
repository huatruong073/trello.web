import { Link, useNavigate } from 'react-router'
import type { ILoginResponse } from '~/+types/ums'
import { UmsApi } from '~/api/umsApi'
import { useAuth } from '~/context/AuthContext'

export function meta() {
    return [
        { title: 'Trello - Organize work and life' },
        {
            name: 'description',
            content:
                'Collaborate, manage projects, and reach new productivity peaks with Trello.',
        },
    ]
}

export default function Login() {
    const navigate = useNavigate()
    const { login, isLoading, logout } = useAuth()
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!event.currentTarget.checkValidity()) {
            event.stopPropagation()
            return
        }
        // Handle login logic here}
        const formData = new FormData(event.currentTarget)
        const username = formData.get('username') as string
        const password = formData.get('password') as string
        const { data, status }: { data: ILoginResponse; status: number } =
            await UmsApi.Auth.login({
                UserName: username,
                Password: password,
                RememberMe: true,
            })
        if (status === 200 && data.Data.AccessToken) {
            login(data)
            navigate('/boards', { replace: true })
        } else {
            alert('Login failed. Please check your credentials.')
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center rounded-lg bg-gradient-to-tl from-blue-50 via-white to-purple-100">
            <div className="w-full max-w-md rounded-lg shadow-md p-6 bg-gradient-to-br from-blue-50 via-white to-purple-100">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">
                    Sign In
                </h1>
                <form className="space-y-5" onSubmit={onSubmit}>
                    <div>
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="w-full text-gray-600 px-4 py-2 border border-blue-600 rounded placeholder:text-gray-500 placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                            autoComplete="username"
                            placeholder="Enter your username"
                            required
                            onInvalid={(event) => {
                                ;(
                                    event.target as HTMLInputElement
                                ).setCustomValidity(
                                    'Please enter your username.'
                                )
                            }}
                            onInput={(event) => {
                                ;(
                                    event.target as HTMLInputElement
                                ).setCustomValidity('')
                            }}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full text-gray-600 px-4 py-2 border placeholder:text-gray-500 placeholder:text-sm border-blue-600 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                            autoComplete="current-password"
                            placeholder="Enter your password"
                            required
                            onInvalid={(event) => {
                                ;(
                                    event.target as HTMLInputElement
                                ).setCustomValidity(
                                    'Please enter your password.'
                                )
                            }}
                            onInput={(event) => {
                                ;(
                                    event.target as HTMLInputElement
                                ).setCustomValidity('')
                            }}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold"
                    >
                        Login
                    </button>
                    <div>
                        <Link
                            to="/register"
                            className="text-sm text-blue-600 hover:underline"
                        >
                            Don't have an account? Sign up
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
