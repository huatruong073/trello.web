export function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    }
    return new Date(date).toLocaleDateString('en-US', options)
}

export function truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text
    return `${text.substring(0, maxLength - 3)}...`
}

export function generateUniqueId(): string {
    return (
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15)
    )
}
