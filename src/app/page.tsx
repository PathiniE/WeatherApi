'use client'
import { useState } from 'react'
import SearchBox from '../app/components/SearchBox'
import WeatherCard from '../app/components/WeatherCard'
import { WeatherData } from '../app/types/weather'
export default function Home() {
const [weather, setWeather] = useState<WeatherData | null>(null)
const [loading, setLoading] = useState(false)
const [error, setError] = useState<string | null>(null)
const handleSearch = async (city: string) => {
setLoading(true)
setError(null)
try {
const response = await fetch(`/api/weather?city=${encodeURIComponent(city)}`)
const data = await response.json()
if (!response.ok) {
throw new Error(data.error || 'Failed to fetch weather data')
}
setWeather(data)
} catch (err) {
setError(err instanceof Error ? err.message : 'An error occurred')
} finally {
setLoading(false)
}
}
return (
<main className="min-h-screen bg-gray-100 py-8 px-4">
<div className="max-w-md mx-auto space-y-6">
<h1 className="text-3xl font-bold text-center mb-8">Weather App</h1>
<SearchBox onSearch={handleSearch} />
{loading && <p className="text-center">Loading...</p>}
{error && <p className="text-red-500 text-center">{error}</p>}
{weather && <WeatherCard data={weather} />}
</div>
</main>
)
}


