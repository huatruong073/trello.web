function TopBar() {
    return (
        <header className="w-full bg-white shadow flex items-center justify-between px-6 py-3 sticky top-0 z-50">
            <div className="flex items-center gap-2">
                <img src="/favicon.ico" alt="Logo" className="h-8 w-8" />
                <span className="text-xl font-bold text-gray-800">
                    Trello Web
                </span>
            </div>
            <nav className="hidden md:flex flex-1">
                <ul className="flex gap-6 ml-8">
                    <li>
                        <a
                            href="#"
                            className="text-gray-700 hover:text-blue-600 font-medium transition"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="text-gray-700 hover:text-blue-600 font-medium transition"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="text-gray-700 hover:text-blue-600 font-medium transition"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
            <div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition font-semibold">
                    Login
                </button>
            </div>
        </header>
    )
}

export default TopBar
