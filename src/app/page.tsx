'use client'

import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-5xl items-center px-6 py-16">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">
          <section>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Earnest Fintech
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Simple task management for your daily work.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Keep your tasks organized, search quickly, and manage your workflow from one clean dashboard.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/login"
                className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Get Started
              </Link>
              <Link
                href="/login"
                className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                Sign In
              </Link>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-xl font-semibold text-slate-900">Today&apos;s overview</h2>
              <p className="mt-1 text-sm text-slate-500">
                A quick summary of what your team is focusing on.
              </p>
            </div>

            <div className="mt-6 space-y-4">
              {[
                ["Client onboarding updates", "In progress"],
                ["Review pending tasks", "Ready"],
                ["Team follow-up items", "Scheduled"],
              ].map(([title, status]) => (
                <div
                  key={title}
                  className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
                >
                  <div>
                    <p className="font-medium text-slate-900">{title}</p>
                    <p className="mt-1 text-sm text-slate-500">{status}</p>
                  </div>
                  <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
                    Task
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
