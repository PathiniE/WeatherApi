'use client'

export default function SearchBox({ onSearch }: { onSearch: (city: string) => void }) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const city = formData.get('city') as string
    
    if (city.trim()) {
      onSearch(city)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 max-w-sm w-full">
      <input
        type="text"
        name="city"
        placeholder="Enter city name..."
        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Search
      </button>
    </form>
  )
}
