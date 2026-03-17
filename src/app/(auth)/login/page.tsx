'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

export default function AuthPage() {
  const router = useRouter();
  const [mode, setMode] = useState("login");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const body =
      mode === "register"
        ? {
            action: "register",
            name: form.name,
            email: form.email,
            password: form.password,
          }
        : {
            action: "login",
            email: form.email,
            password: form.password,
          };

    try {
      const res = await api.post("/auth", body);
      const data = res.data;

      alert(data.message);
      setForm({ name: "", email: "", password: "" });

      if (mode === "login") {
         localStorage.setItem("token", data.accessToken);
         router.push("/dashboard");
      } else {
        setMode("login");
      }

    } catch (err: any) {
      console.error(err);
      alert(err.response?.data?.message || "Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 px-6 py-10 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(16,185,129,0.18),_transparent_24%)]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl items-center gap-10 lg:grid-cols-[1fr_440px]">
        <section className="max-w-xl">
          <span className="inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm text-sky-100 backdrop-blur">
            Earnest Fintech Workspace
          </span>
          <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl">
            {mode === "login" ? "Welcome back." : "Create your account."}
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Access your task dashboard with a lighter workflow, stronger focus, and a cleaner look.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/8 p-5 backdrop-blur">
              <p className="text-sm text-slate-300">Secure session</p>
              <p className="mt-2 text-2xl font-bold">Token-based auth</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/8 p-5 backdrop-blur">
              <p className="text-sm text-slate-300">Full Stack Developer</p>
              <p className="mt-2 text-2xl font-bold">Amarjeet Sharma</p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/12 bg-white/10 p-6 shadow-2xl shadow-slate-950/50 backdrop-blur-xl">
          <div className="rounded-[1.5rem] bg-white p-6 text-slate-900 sm:p-8">
            <div className="mb-8">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-600">
                {mode === "login" ? "Sign in" : "Register"}
              </p>
              <h2 className="mt-3 text-3xl font-bold">
                {mode === "login" ? "Continue to dashboard" : "Start managing better"}
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === "register" && (
                <input
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
                />
              )}

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
              />

              <input
                name="password"
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl bg-slate-950 px-4 py-3 font-semibold text-white shadow-[0_20px_50px_-20px_rgba(15,23,42,0.7)] hover:-translate-y-0.5 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70 cursor-pointer"
              >
                {loading ? "Processing..." : (mode === "login" ? "Login" : "Register")}
              </button>
            </form>

            <button
              type="button"
              className="mt-6 text-sm font-semibold text-sky-700 hover:text-sky-900 cursor-pointer"
              onClick={() => setMode(mode === "login" ? "register" : "login")}
            >
              {mode === "login" ? "Create Account" : "Back to Login"}
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
