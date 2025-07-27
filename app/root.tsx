import {
    isRouteErrorResponse,
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLocation,
    useNavigate,
} from 'react-router'
import { useEffect } from 'react'
import { useAuth } from '~/context/AuthContext'
import type { Route } from '~/+types/root'

import '~/app.css'
import TopBar from '~/components/layouts/topbar'
import { AuthProvider } from '~/context/AuthContext'

export const links: Route.LinksFunction = () => [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
    },
    {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
    },
]

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <Meta />
                <Links />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    )
}

function AppContent() {
    const location = useLocation()
    const hideTopBar =
        location.pathname === '/login' || location.pathname === '/register'
    const navigate = useNavigate()
    const { isAuthenticated, isLoading } = useAuth()

    useEffect(() => {
        if (!isAuthenticated && !hideTopBar && !isLoading) {
            navigate('/', { replace: true })
        }
    }, [isAuthenticated, hideTopBar, navigate, isLoading])

    if (isLoading) {
        return null
    }

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100">
            {!hideTopBar && <TopBar />}
            <div className="container mx-auto p-4">
                <Outlet />
            </div>
        </div>
    )
}

export default function App() {
    return (
        <AuthProvider>
            <AppContent />
        </AuthProvider>
    )
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
    let message = 'Oops!'
    let details = 'An unexpected error occurred.'
    let stack: string | undefined

    if (isRouteErrorResponse(error)) {
        message = error.status === 404 ? '404' : 'Error'
        details =
            error.status === 404
                ? 'The requested page could not be found.'
                : error.statusText || details
    } else if (import.meta.env.DEV && error && error instanceof Error) {
        details = error.message
        stack = error.stack
    }

    return (
        <main className="pt-16 p-4 container mx-auto">
            <h1>{message}</h1>
            <p>{details}</p>
            {stack && (
                <pre className="w-full p-4 overflow-x-auto">
                    <code>{stack}</code>
                </pre>
            )}
        </main>
    )
}
