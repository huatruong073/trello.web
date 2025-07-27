import { Outlet } from 'react-router'

export default function BoardLayout() {
    return (
        <div className="flex h-screen">
            <div className="flex flex-col flex-1 overflow-hidden">
                <main className="flex-1 overflow-auto p-6 bg-gray-50">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
