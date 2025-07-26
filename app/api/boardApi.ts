// API functions for board-related operations
export async function fetchBoards() {
    // In a real app, you'd make a fetch request to your API
    // For now, returning mock data
    return [
        { id: '1', title: 'Project Alpha', owner: 'User1' },
        { id: '2', title: 'Marketing Campaign', owner: 'User2' },
        { id: '3', title: 'Personal Tasks', owner: 'User1' },
    ]
}

export async function fetchBoardById(id: string) {
    // In a real app, you'd make a fetch request to your API
    const boards = await fetchBoards()
    return boards.find((board) => board.id === id)
}

export async function createBoard(boardData: any) {
    // In a real app, you'd make a POST request to your API
    return {
        id: Date.now().toString(),
        ...boardData,
    }
}

export async function updateBoard(id: string, boardData: any) {
    // In a real app, you'd make a PUT request to your API
    return {
        id,
        ...boardData,
    }
}

export async function deleteBoard(id: string) {
    // In a real app, you'd make a DELETE request to your API
    return { success: true }
}
