
import { useState } from 'react'
import { Search } from 'lucide-react'
import { categories } from '../data/categories'

export default function Explore() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  return (
    <main className="mx-auto min-h-[65vh] max-w-7xl px-5 py-14">
      <h1 className="text-3xl font-bold text-slate-900">Explore Prompts</h1>
      <p className="mt-2 text-slate-500">
        Search and discover prompts for your next project.
      </p>

      <div className="mt-8 flex max-w-2xl items-center gap-3 rounded-xl border border-slate-300 bg-white px-4 py-3">
        <Search className="text-slate-400" size={20} />
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search prompts..."
          className="w-full bg-transparent outline-none"
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {['All', ...categories.map((item) => item.name)].map((name) => (
          <button
            key={name}
            onClick={() => setCategory(name)}
            className={`rounded-full px-4 py-2 text-sm ${
              category === name
                ? 'bg-indigo-700 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-indigo-50'
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-dashed border-slate-300 p-10 text-center">
        <h2 className="text-xl font-semibold text-slate-800">
          Your prompt collection starts here
        </h2>
        <p className="mt-2 text-slate-500">
          Firebase prompt data and live search will be connected in the next development milestone.
        </p>
        <p className="mt-3 text-xs text-slate-400">
          Current filters: {category} · Search: {search || 'None'}
        </p>
      </div>
    </main>
  )
}
