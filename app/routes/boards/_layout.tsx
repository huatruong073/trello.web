import { Outlet } from 'react-router'
import TopBar from '../../components/topbar'
import Sidebar from '../../components/sidebar'

export default function BoardLayout() {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex flex-col flex-1 overflow-hidden">
                <TopBar />
                <main className="flex-1 overflow-auto p-6 bg-gray-50">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
