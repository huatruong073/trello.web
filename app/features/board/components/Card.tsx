import { useState } from 'react'

interface CardProps {
    id: string
    title: string
    description?: string
    labels?: string[]
    dueDate?: Date
    onEdit?: (id: string) => void
    onDelete?: (id: string) => void
}

export default function Card({
    id,
    title,
    description,
    labels = [],
    dueDate,
    onEdit,
    onDelete,
}: CardProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="bg-white rounded-md shadow-sm p-3 mb-2 cursor-pointer hover:shadow-md transition-shadow">
            {/* Card labels */}
            {labels.length > 0 && (
                <div className="flex gap-1 mb-2 flex-wrap">
                    {labels.map((label, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800"
                        >
                            {label}
                        </span>
                    ))}
                </div>
            )}

            {/* Card title */}
            <h3 className="font-medium text-gray-800 mb-1">{title}</h3>

            {/* Card description if available */}
            {description && (
                <p className="text-sm text-gray-600 mb-2">{description}</p>
            )}

            {/* Card footer with meta information */}
            <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
                {/* Due date if available */}
                {dueDate && (
                    <div className="flex items-center">
                        <span className="material-icons text-xs mr-1">
                            schedule
                        </span>
                        <span>{dueDate.toLocaleDateString()}</span>
                    </div>
                )}

                {/* Card actions */}
                <div className="relative">
                    <button
                        onClick={(e) => {
                            e.stopPropagation()
                            setIsMenuOpen(!isMenuOpen)
                        }}
                        className="p-1 rounded-full hover:bg-gray-100"
                    >
                        <span className="material-icons text-gray-500 text-sm">
                            more_horiz
                        </span>
                    </button>

                    {/* Dropdown menu */}
                    {isMenuOpen && (
                        <div className="absolute right-0 mt-1 w-36 bg-white rounded-md shadow-lg z-10">
                            <ul>
                                <li>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            if (onEdit) onEdit(id)
                                            setIsMenuOpen(false)
                                        }}
                                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        Edit
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            if (onDelete) onDelete(id)
                                            setIsMenuOpen(false)
                                        }}
                                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                                    >
                                        Delete
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
