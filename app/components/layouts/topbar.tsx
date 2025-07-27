import { Trello } from 'lucide-react'
import { Button } from '~/components/ui/button'

function TopBar() {
    return (
        <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 sm:py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Trello className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                    <span className="text-xl sm:text-2xl font-bold text-gray-900">
                        Trello
                    </span>
                </div>
                <div className="flex items-end gap-2">
                    <Button className="text-gray-900 bg-gray-100 hover:bg-gray-100">
                        Đăng nhập
                    </Button>
                    <Button className="bg-blue-600 text-white hover:bg-blue-700">
                        Đăng ký
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default TopBar
