
import { Link } from 'react-router-dom'
import { ArrowRight, Search, Sparkles } from 'lucide-react'
import { categories } from '../data/categories'

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-br from-indigo-950 via-indigo-800 to-violet-700 px-5 py-24 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm">
            <Sparkles size={16} />
            Your Free AI Prompt Library
          </div>

          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
            Find the Right Prompt.
            <span className="block text-violet-200">Create Something Amazing.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-indigo-100">
            Discover useful AI prompts for education, programming, business,
            creativity and productivity — all in one place.
          </p>

          <Link
            to="/explore"
            className="mt-9 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-indigo-800 hover:bg-indigo-50"
          >
            <Search size={18} />
            Explore Prompts
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="mb-8">
          <p className="font-semibold text-indigo-600">EXPLORE BY CATEGORY</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Find prompts for every goal
          </h2>
          <p className="mt-2 text-slate-500">
            Choose a category and discover prompts to get started.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ name, icon: Icon, description }) => (
            <Link
              key={name}
              to="/explore"
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
                <Icon size={25} />
              </div>
              <h3 className="font-bold text-slate-900">{name}</h3>
              <p className="mt-2 text-sm text-slate-500">{description}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
