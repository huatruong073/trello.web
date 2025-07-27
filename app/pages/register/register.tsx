import { Link } from 'react-router'

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
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!event.currentTarget.checkValidity()) {
            event.stopPropagation()
            return
        }
        const formData = new FormData(event.currentTarget)
        // const username = formData.get('username') as string
        const password = formData.get('password') as string
        const confirmPassword = formData.get('confirm-password') as string
        if (password !== confirmPassword) {
            alert('Passwords do not match. Please re-enter your password.')
            return
        }
        // Handle registration logic here
        // ...existing code...
    }

    return (
        <div className="min-h-screen flex items-center justify-center rounded-lg bg-gradient-to-tl from-blue-50 via-white to-purple-100">
            <div className="w-full max-w-md rounded-lg shadow-md p-6 bg-gradient-to-br from-blue-50 via-white to-purple-100">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">
                    Sign up
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
                    <div>
                        <label
                            htmlFor="confirm-password"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Confirm password
                        </label>
                        <input
                            type="password"
                            id="confirm-password"
                            name="confirm-password"
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
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full text-gray-600 px-4 py-2 border border-blue-600 rounded placeholder:text-gray-500 placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                            autoComplete="email"
                            placeholder="Enter your email"
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
                            htmlFor="phone-number"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Phone number
                        </label>
                        <input
                            type="tel"
                            id="phone-number"
                            name="phone-number"
                            className="w-full text-gray-600 px-4 py-2 border border-blue-600 rounded placeholder:text-gray-500 placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                            autoComplete="tel"
                            placeholder="Enter your phone number"
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
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold"
                    >
                        Register
                    </button>
                    <div>
                        <Link
                            to="/login"
                            className="text-sm text-blue-600 hover:underline"
                        >
                            Already have an account? Sign in
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
