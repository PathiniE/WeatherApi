import { WeatherData } from '../types/weather'
export default function WeatherCard({ data }: { data: WeatherData }) {
return (
<div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
<h2 className="text-2xl font-bold mb-4">{data.city}</h2>
<div className="space-y-2">
<p className="text-4xl font-bold">{data.temperature}°C</p>
<p className="capitalize">{data.description}</p>
<div className="text-gray-600">
<p>Humidity: {data.humidity}%</p>
<p>Wind Speed: {data.windSpeed} m/s</p>
</div>
</div>
</div>
)
}