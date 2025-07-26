import { type RouteConfig, index, route } from '@react-router/dev/routes'

// Define your route structure
export default [
    index('routes/home.tsx'),

    // Example of nested routes - add when needed
    // route('boards', 'routes/boards/_layout.tsx', [
    //   index('routes/boards/index.tsx'),
    //   route(':id', 'routes/boards/$id.tsx'),
    // ]),

    // Auth routes - add when needed
    // route('auth', 'routes/auth/_layout.tsx', [
    //   route('login', 'routes/auth/login.tsx'),
    //   route('register', 'routes/auth/register.tsx'),
    // ]),
] satisfies RouteConfig
