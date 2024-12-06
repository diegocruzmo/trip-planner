import { fetchLocations } from '@/services/fetchLocations'
import { useCallback, useState } from 'react'

export const useLocations = () => {
  const [locations, setLocations] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const getLocations = useCallback(async (location: string) => {
    setLoading(true)
    setError(null)
    try {
      const data = await fetchLocations({ location })
      setLocations(data.features.map((item) => item.place_name))
    } catch (error) {
      setError(error as Error)
    } finally {
      setLoading(false)
    }
  }, [])

  return { locations, loading, error, getLocations }
}
