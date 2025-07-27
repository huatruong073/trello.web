import { useLoaderData } from 'react-router'
import type { Route } from '~/+types/boards'

// Data loader function - runs on server side
export async function loader({}: Route.LoaderArgs) {
    try {
        // In a real app, this would fetch from your API
        const boards = [
            { id: '1', title: 'Project Alpha', owner: 'User1' },
            { id: '2', title: 'Marketing Campaign', owner: 'User2' },
            { id: '3', title: 'Personal Tasks', owner: 'User1' },
        ]

        return { boards }
    } catch (error) {
        return { boards: [], error: 'Failed to load boards' }
    }
}

// Meta information for this route
export function meta({}: Route.MetaArgs) {
    return [
        { title: 'Your Boards | Trello Web' },
        { name: 'description', content: 'View and manage your boards' },
    ]
}

export default function BoardsIndex() {
    const { boards } = useLoaderData() as {
        boards: Array<{ id: string; title: string; owner: string }>
    }

    return (
        <div className="space-y-2">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Your Boards</h1>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Create Board
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {boards.map((board) => (
                    <a
                        key={board.id}
                        href={`/boards/${board.id}`}
                        className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                        <h3 className="text-lg font-medium">{board.title}</h3>
                        <p className="text-gray-500 text-sm mt-1">
                            Owner: {board.owner}
                        </p>
                    </a>
                ))}
            </div>
        </div>
    )
}
