import { NextResponse } from 'next/server'
const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
export async function GET(request: Request) {
const { searchParams } = new URL(request.url)
const city = searchParams.get('city')
if (!city) {
return NextResponse.json({ error: 'City parameter is required' }, { status: 400 })
}
try {
const response = await fetch(
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
)
const data = await response.json()

if (data.cod !== 200) {
    return NextResponse.json({ error: data.message }, { status: 400 })
    }
    const weatherData = {
    city: data.name,
    temperature: Math.round(data.main.temp),
    description: data.weather[0].description,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed
    }
    return NextResponse.json(weatherData)
    } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch weather data' }, { status: 500 })
    }
    }
    