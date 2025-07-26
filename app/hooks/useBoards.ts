// Custom hook for managing board data
import { useState, useEffect } from 'react'
import { fetchBoards } from '~/api/boardApi'

export function useBoards() {
    const [boards, setBoards] = useState<any>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<any>(null)

    useEffect(() => {
        const getBoards = async () => {
            try {
                setLoading(true)
                const data = await fetchBoards()
                setBoards(data)
                setError(null)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        getBoards()
    }, [])

    return { boards, loading, error }
}
