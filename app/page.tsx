import React from 'react'

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-900 via-slate-900 to-black text-white antialiased">
      <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-white/6 flex items-center justify-center ring-1 ring-white/6">E</div>
          <span className="font-medium tracking-wide">Equations</span>
        </div>
        <div className="flex items-center gap-6 text-sm opacity-90">
          <a className="hover:underline">Product</a>
          <a className="hover:underline">Features</a>
          <a className="hover:underline">Screens</a>
          <a className="hover:underline">Contact</a>
          <button className="ml-2 px-4 py-2 rounded-lg bg-white/6 backdrop-blur-sm hover:bg-white/8">Open Beta</button>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-green-400/10 via-purple-400/8 to-blue-400/6 py-1 px-3 text-xs">  
            <span className="text-[10px] uppercase tracking-wider opacity-80">Private Beta</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Where knowledge meets precision.
          </h1>

          <p className="text-slate-300 max-w-xl">
            Equations is a premium knowledge and discussion hub—real-time context, curated insights, and structured learning presented in a clean, futuristic interface.
          </p>

          <div className="flex gap-4 mt-4">
            <a className="px-6 py-3 rounded-lg bg-gradient-to-r from-green-400 to-purple-500 shadow-lg font-semibold">Try Demo</a>
            <a className="px-6 py-3 rounded-lg border border-white/10 bg-white/3">Read Docs</a>
          </div>

          <div className="mt-6 flex items-center gap-4 text-xs text-slate-400">
            <span>Built by Aman · Vishwa · Mohit</span>
            <span className="h-3 w-px bg-white/8" />
            <span>©️ 2025 Equations</span>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="w-[360px] min-h-[560px] rounded-3xl bg-gradient-to-b from-white/3 to-white/5 backdrop-blur-2xl ring-1 ring-white/6 p-6 shadow-2xl">
            <div className="flex justify-between items-center">
              <div className="w-10 h-10 rounded-xl bg-white/6 flex items-center justify-center">•</div>
              <div className="text-xs text-slate-300">Equations • Preview</div>
            </div>

            <div className="mt-6 grid gap-4">
              <div className="rounded-xl p-4 bg-white/3">
                <div className="h-36 rounded-lg bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center text-slate-400">App preview — insert screenshots</div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="h-16 rounded-lg bg-white/4" />
                <div className="h-16 rounded-lg bg-white/4" />
                <div className="h-16 rounded-lg bg-white/4" />
              </div>

              <div className="mt-2 text-xs text-slate-300">A sleek hub for Government News, World & Economy, General Knowledge, Tech & Innovation, and Current Affairs.</div>
            </div>
          </div>

          <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-gradient-to-r from-purple-600/20 to-green-400/12 blur-2xl" />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6">Core Features</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {title: 'Government News', desc: 'Verified official updates and policy breakdowns.'},
            {title: 'World & Economy', desc: 'Curated global insights and economic context.'},
            {title: 'General Knowledge', desc: 'Daily facts, explainers and structured learning.'},
            {title: 'Tech & Innovation', desc: 'Research highlights and innovation stories.'},
            {title: 'Current Affairs', desc: 'Concise summaries of ongoing events.'},
            {title: 'Discussion Spaces', desc: 'Forum-style threads for deep conversation.'}
          ].map((f)=> (
            <article key={f.title} className="p-6 rounded-2xl bg-gradient-to-b from-white/3 to-white/5 ring-1 ring-white/6 backdrop-blur">
              <h3 className="font-medium text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{f.desc}</p>
              <div className="mt-4">
                <a className="text-xs inline-block px-3 py-2 rounded-lg bg-white/6">Open</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6">Screenshots</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900 p-4">
            <div className="h-56 bg-white/3 rounded-lg flex items-center justify-center">Screenshot 1</div>
          </div>
          <div className="rounded-2xl overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900 p-4">
            <div className="h-56 bg-white/3 rounded-lg flex items-center justify-center">Screenshot 2</div>
          </div>
          <div className="rounded-2xl overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900 p-4">
            <div className="h-56 bg-white/3 rounded-lg flex items-center justify-center">Screenshot 3</div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/6 mt-12 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-slate-300 text-sm">Equations — Smart knowledge and discussion hub. Built in India.</div>
          <div className="flex items-center gap-4">
            <a className="text-sm">Privacy</a>
            <a className="text-sm">Terms</a>
            <a className="text-sm">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
