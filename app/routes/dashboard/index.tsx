import type { Route } from '~/+types/boards'

// Meta information for this route
export function meta({}: Route.MetaArgs) {
    return [
        { title: 'Your Boards | Trello Web' },
        { name: 'description', content: 'View and manage your boards' },
    ]
}

export default function Dashboard() {
    // Mock data
    const recentBoards = [
        {
            id: '1',
            title: 'Marketing Campaign',
            owner: 'You',
            updatedAt: '2 days ago',
        },
        {
            id: '2',
            title: 'Product Development',
            owner: 'You',
            updatedAt: '5 days ago',
        },
        {
            id: '3',
            title: 'Customer Research',
            owner: 'Jane Smith',
            updatedAt: '1 week ago',
        },
    ]

    const tasks = [
        {
            id: '101',
            title: 'Finish homepage design',
            dueDate: 'Today',
            priority: 'high',
            board: 'Marketing Campaign',
        },
        {
            id: '102',
            title: 'Write API documentation',
            dueDate: 'Tomorrow',
            priority: 'medium',
            board: 'Product Development',
        },
        {
            id: '103',
            title: 'Review user feedback',
            dueDate: 'Jul 29',
            priority: 'normal',
            board: 'Customer Research',
        },
        {
            id: '104',
            title: 'Implement login page',
            dueDate: 'Jul 30',
            priority: 'high',
            board: 'Product Development',
        },
    ]

    const teamMembers = [
        { id: '201', name: 'Alex Wong', role: 'Designer', avatar: '👨‍🎨' },
        { id: '202', name: 'Sarah Miller', role: 'Developer', avatar: '👩‍💻' },
        {
            id: '203',
            name: 'Carlos Rodriguez',
            role: 'Marketing',
            avatar: '👨‍💼',
        },
    ]

    return (
        <div className="space-y-8 pb-8">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Create Board
                </button>
            </div>

            {/* Recent boards */}
            <div>
                <h2 className="text-lg font-semibold mb-3">Recent Boards</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {recentBoards.map((board) => (
                        <a
                            key={board.id}
                            href={`/boards/${board.id}`}
                            className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        >
                            <h3 className="text-lg font-medium">
                                {board.title}
                            </h3>
                            <div className="flex justify-between mt-2 text-sm text-gray-500">
                                <span>Owner: {board.owner}</span>
                                <span>Updated {board.updatedAt}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Upcoming tasks */}
            <div>
                <h2 className="text-lg font-semibold mb-3">Upcoming Tasks</h2>
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    {tasks.map((task) => (
                        <div
                            key={task.id}
                            className="flex items-center p-4 border-b last:border-b-0"
                        >
                            <div className="flex-1">
                                <h4 className="font-medium">{task.title}</h4>
                                <p className="text-sm text-gray-500">
                                    From board: {task.board}
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span
                                    className={`px-2 py-1 rounded text-xs ${
                                        task.priority === 'high'
                                            ? 'bg-red-100 text-red-800'
                                            : task.priority === 'medium'
                                              ? 'bg-yellow-100 text-yellow-800'
                                              : 'bg-blue-100 text-blue-800'
                                    }`}
                                >
                                    {task.priority}
                                </span>
                                <span className="text-sm text-gray-700">
                                    {task.dueDate}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Team */}
            <div>
                <h2 className="text-lg font-semibold mb-3">Team Members</h2>
                <div className="bg-white rounded-lg shadow p-4">
                    <div className="flex flex-wrap gap-4">
                        {teamMembers.map((member) => (
                            <div
                                key={member.id}
                                className="flex items-center gap-3"
                            >
                                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-xl">
                                    {member.avatar}
                                </div>
                                <div>
                                    <h4 className="font-medium">
                                        {member.name}
                                    </h4>
                                    <p className="text-sm text-gray-500">
                                        {member.role}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
