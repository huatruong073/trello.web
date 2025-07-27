import { ArrowRight, CheckSquare, Users, Zap, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router'

export function meta() {
    return [
        { title: 'Trello - Organize work and life' },
        {
            name: 'description',
            content:
                'Collaborate, manage projects, and reach new productivity peaks with Trello.',
        },
    ]
}

export default function Landing() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="mx-auto px-6 pt-16 pb-24 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl mx-auto text-gray-900">
                    Organize work and life,
                    <span className="text-blue-600">finally.</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
                    Trello helps teams move work forward. Collaborate, manage
                    projects, and reach new productivity peaks. From high rises
                    to the home office, the way your team works is
                    unique—accomplish it all with Trello.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link
                        to="/login"
                        className="px-6 py-3 bg-gray-900 text-white rounded flex items-center gap-2 hover:bg-gray-800"
                    >
                        Start for free <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                        to="#"
                        className="px-6 py-3 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
                    >
                        Watch demo
                    </Link>
                </div>
            </div>

            {/* Features Section */}
            <div className="container mx-auto px-6 pb-24">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
                    Everything you need to stay organized
                </h2>
                <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">
                    Powerful features to help your team collaborate and get more
                    done.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Task Management */}
                    <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                        <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-6">
                            <CheckSquare className="text-blue-600 w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">
                            Task Management
                        </h3>
                        <p className="text-gray-600">
                            Organize your tasks with intuitive drag-and-drop
                            boards
                        </p>
                    </div>

                    {/* Team Collaboration */}
                    <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                        <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-6">
                            <Users className="text-blue-600 w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">
                            Team Collaboration
                        </h3>
                        <p className="text-gray-600">
                            Work together with your team in real-time
                        </p>
                    </div>

                    {/* Lightning Fast */}
                    <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                        <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-6">
                            <Zap className="text-blue-600 w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">
                            Lightning Fast
                        </h3>
                        <p className="text-gray-600">
                            Built with React router V7 for optimal performance
                        </p>
                    </div>

                    {/* Secure */}
                    <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                        <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-6">
                            <ShieldCheck className="text-blue-600 w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Secure</h3>
                        <p className="text-gray-600">
                            Enterprise-grade security with .NET 9 and React
                            technologies
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
