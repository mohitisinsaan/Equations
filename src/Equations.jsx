import React from 'react';
import { motion } from 'framer-motion';

export default function Equations() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white/5 via-white/3 to-white/2 text-slate-900 antialiased">
      <header className="w-full py-6">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-center">
          <div className="relative">
            <div className="w-56 h-20 flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-lg">
              <div className="text-2xl font-extrabold tracking-tight lowercase">equations</div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6">
        <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold leading-tight">equations</h1>
            <p className="mt-4 text-lg opacity-85">A sleek, minimal landing hero inspired by liquid glass aesthetics. Lightweight, accessible, and intentionally tasteful — like you trying to be productive at 2am.</p>

            <div className="mt-6 flex gap-3">
              <a href="/download" className="inline-block px-5 py-3 rounded-2xl border border-slate-200/8 bg-white/6 backdrop-blur-sm">Download</a>
              <a href="#features" className="inline-block px-5 py-3 rounded-2xl border border-transparent text-sm">Features</a>
            </div>

            <ul id="features" className="mt-8 space-y-3 text-sm opacity-85">
              <li>• Single-file hero component for quick drop-in.</li>
              <li>• Tailwind-first styling; works in Vite / Next / plain React.</li>
              <li>• Accessible, responsive, and easy to theme.</li>
            </ul>
          </div>

          <div className="relative">
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="w-full h-80 rounded-2xl bg-gradient-to-br from-white/6 to-white/3 border border-white/8 backdrop-blur-md p-6"
            >
              <div className="h-full flex flex-col justify-center items-start">
                <div className="text-sm opacity-70">Live preview</div>
                <div className="mt-4 text-lg font-medium">equations — where design meets math</div>
                <div className="mt-6 text-xs opacity-70">Use this box to showcase screenshots, animations, or a small demo iframe.</div>
              </div>
            </motion.div>
          </div>
        </section>

        <footer className="mt-14 py-8 text-center text-xs opacity-70">© {new Date().getFullYear()} equations — made with low-key devotion and excessive caffeine.</footer>
      </main>
    </div>
  );
}
