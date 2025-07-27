import type { Route } from '~/+types/home'
import Landing from '~/pages/landing/landing'

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'Trello Web' },
        { name: 'description', content: 'Welcome to Trello Web!' },
    ]
}

export default function Home() {
    return <Landing />
}
