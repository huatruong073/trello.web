export default function Sidebar() {
    return (
        <aside className="bg-gray-800 text-white w-64 flex-shrink-0 hidden md:block">
            <div className="p-4">
                <h2 className="text-xl font-bold">Trello Web</h2>
            </div>
            <nav className="mt-4">
                <ul className="space-y-2">
                    <li>
                        <a
                            href="/"
                            className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg"
                        >
                            <span className="material-icons mr-3">
                                dashboard
                            </span>
                            Boards
                        </a>
                    </li>
                    <li>
                        <a
                            href="/templates"
                            className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg"
                        >
                            <span className="material-icons mr-3">
                                grid_view
                            </span>
                            Templates
                        </a>
                    </li>
                    <li>
                        <a
                            href="/settings"
                            className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg"
                        >
                            <span className="material-icons mr-3">
                                settings
                            </span>
                            Settings
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="absolute bottom-0 w-64 p-4">
                <a
                    href="/logout"
                    className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg"
                >
                    <span className="material-icons mr-3">logout</span>
                    Logout
                </a>
            </div>
        </aside>
    )
}
