import { Locations } from '@/types/types'

interface Params {
  location: string
}

export const fetchLocations = async ({
  location
}: Params): Promise<Locations> => {
  const url = `https://api.maptiler.com/geocoding/${location}.json?key=${
    import.meta.env.VITE_API_KEY_LOCATION
  }`

  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error('Network response was not ok')
    const data = res.json()
    return data
  } catch (error) {
    console.error('Error fetching locations:', error)
    throw error
  }
}
