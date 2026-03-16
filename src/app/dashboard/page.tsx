'use client';

import Link from "next/link";
import { useDeferredValue, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

type TaskStatus = "PENDING" | "COMPLETED";

interface Task {
  id: string;
  title: string;
  description: string | null;
  status: TaskStatus;
}

export default function Dashboard() {
  const router = useRouter();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [activeTaskId, setActiveTaskId] = useState<string | null>(null);
  const deferredSearch = useDeferredValue(search);

  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTasks(Array.isArray(res.data) ? res.data : res.data.tasks || []);
    } catch (err) {
      console.error("Failed to fetch tasks", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined" && !localStorage.getItem("token")) {
      router.replace("/login");
    } else {
      fetchTasks();
    }
  }, [router]);

  const handleSubmit = async () => {
    if (!title) return;

    try {
      if (editId) {
        await api.patch(`/tasks/${editId}`, { title, description });
        setEditId(null);
      } else {
        await api.post("/tasks", { title, description });
      }

      setTitle("");
      setDescription("");
      fetchTasks();
    } catch (err) {
      console.error("Failed to save task", err);
    }
  };

  const handleEdit = (task: Task) => {
    setTitle(task.title);
    setDescription(task.description || "");
    setEditId(task.id);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    try {
      await api.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (err) {
      console.error("Failed to delete task", err);
    }
  };

  const handleToggleStatus = async (id: string) => {
    setActiveTaskId(id);
    try {
      await api.patch(`/tasks/${id}/toggle`);
      fetchTasks();
      
    } catch (err) {
      console.error("Failed to toggle task status", err);
    } finally {
      setActiveTaskId(null);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(deferredSearch.toLowerCase()) ||
    (task.description || "").toLowerCase().includes(deferredSearch.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#eef4ff_0%,#f8fafc_35%,#ffffff_100%)] px-4 py-8 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <section className="rounded-[2rem] bg-slate-950 px-6 py-8 text-white shadow-[0_30px_100px_-40px_rgba(15,23,42,0.8)] sm:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.25em] text-sky-300">Dashboard</p>
              <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                Task Management
              </h1>
              <p className="mt-4 text-base leading-7 text-slate-300">
                Search faster, update tasks cleanly, and keep the workflow focused in one place.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/"
                className="rounded-2xl border border-white/15 bg-white/10 px-5 py-3 font-semibold text-white hover:bg-white/15"
              >
                Portfolio
              </Link>
              <button
                onClick={handleLogout}
                className="rounded-2xl border border-rose-400/30 bg-rose-400/10 px-5 py-3 font-semibold text-rose-100 hover:bg-rose-400/20"
              >
                Logout
              </button>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[360px_1fr]">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.25)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Quick editor</p>
                <h2 className="mt-1 text-2xl font-bold">
                  {editId ? "Update task" : "Create task"}
                </h2>
              </div>
              <div className="rounded-2xl bg-sky-100 px-3 py-2 text-sm font-semibold text-sky-700">
                {tasks.length} total
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <input
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
                value={title}
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                className="min-h-32 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
                value={description}
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
              />
              <button
                onClick={handleSubmit}
                className="w-full rounded-2xl bg-slate-950 px-4 py-3 font-semibold text-white shadow-[0_18px_45px_-24px_rgba(15,23,42,0.75)] hover:-translate-y-0.5 hover:bg-slate-800"
              >
                {editId ? "Update Task" : "Add Task"}
              </button>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.25)]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-slate-500">Workspace</p>
                <h2 className="mt-1 text-2xl font-bold">Your tasks</h2>
              </div>
              <input
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none sm:max-w-xs focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
                placeholder="Search tasks..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="mt-6 space-y-4">
              {loading ? (
                <p className="rounded-2xl bg-slate-50 px-4 py-6 text-center text-slate-500">Loading tasks...</p>
              ) : filteredTasks.length > 0 ? (
                filteredTasks.map((task) => (
                  <article
                    key={task.id}
                    className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-slate-50/80 p-5 md:flex-row md:items-center md:justify-between"
                  >
                    <div className="max-w-xl">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-lg font-bold text-slate-900">{task.title}</h3>
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            task.status === "COMPLETED"
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-amber-100 text-amber-700"
                          }`}
                        >
                          {task.status === "COMPLETED" ? "Completed" : "Pending"}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {task.description || "No description added yet."}
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <button
                        className="rounded-2xl bg-emerald-50 px-4 py-2.5 font-semibold text-emerald-700 ring-1 ring-emerald-100 hover:bg-emerald-100 disabled:cursor-not-allowed disabled:opacity-70"
                        onClick={() => handleToggleStatus(task.id)}
                        disabled={activeTaskId === task.id}
                      >
                        {activeTaskId === task.id
                          ? "Updating..."
                          : task.status === "COMPLETED"
                            ? "Mark Pending"
                            : "Mark Complete"}
                      </button>
                      <button
                        className="rounded-2xl bg-white px-4 py-2.5 font-semibold text-slate-700 ring-1 ring-slate-200 hover:bg-slate-100"
                        onClick={() => handleEdit(task)}
                      >
                        Edit
                      </button>
                      <button
                        className="rounded-2xl bg-rose-50 px-4 py-2.5 font-semibold text-rose-700 ring-1 ring-rose-100 hover:bg-rose-100"
                        onClick={() => handleDelete(task.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </article>
                ))
              ) : (
                <div className="rounded-[1.5rem] border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center">
                  <h3 className="text-xl font-bold text-slate-900">No tasks found</h3>
                  <p className="mt-2 text-slate-500">
                    Add a new task or try a different search term.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
