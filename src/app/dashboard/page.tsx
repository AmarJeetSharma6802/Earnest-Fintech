'use client';

import Link from "next/link";
import { useDeferredValue, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";
import PaginationControls from "@/app/dashboard/pagination-controls";

type TaskStatus = "PENDING" | "COMPLETED";

interface Task {
  id: string;
  title: string;
  description: string | null;
  status: TaskStatus;
}

interface TasksResponse {
  tasks: Task[];
  pagination?: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

interface CurrentUser {
  id: string;
  name: string;
  email: string;
}

export default function Dashboard() {
  const router = useRouter();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [user, setUser] = useState<CurrentUser | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [activeTaskId, setActiveTaskId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalTasks, setTotalTasks] = useState(0);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const deferredSearch = useDeferredValue(search);
  const profileMenuRef = useRef<HTMLDivElement | null>(null);
  const userInitial = user?.name?.trim().charAt(0).toUpperCase() || "U";

  // show page 5 
  const tasksPerPage = 5;

  const fetchTasks = async (page = currentPage, searchTerm = deferredSearch) => {
    setLoading(true);
    try {
      const res = await api.get<TasksResponse>("/tasks", {
        params: {
          page,
          limit: tasksPerPage,
          search: searchTerm || undefined,
        },
      });

      const responseTasks = res.data.tasks || [];
      const responsePagination = res.data.pagination;

      setTasks(responseTasks);
      setCurrentPage(responsePagination?.page || page);
      setTotalPages(responsePagination?.totalPages || 1);
      setTotalTasks(responsePagination?.total || responseTasks.length);
    } catch (err) {
      console.error("Failed to fetch tasks", err);
    } finally {
      setLoading(false);
    }
  };

  // user fetch for logo
  useEffect(() => {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

    if (!token) {
      router.replace("/login");
      return;
    }

    const loadCurrentUser = async () => {
      try {
        const res = await api.get<{ user: CurrentUser }>("/auth/me");
        setUser(res.data.user);
      } catch (err) {
        console.error("Failed to load user", err);
        localStorage.removeItem("token");
        router.replace("/login");
      }
    };

    loadCurrentUser();
  }, [router]);

  // task fetch  
  useEffect(() => {
    if (typeof window !== "undefined" && !localStorage.getItem("token")) {
      router.replace("/login");
      return;
    }

    fetchTasks(1, deferredSearch);
  }, [router, deferredSearch]);

  useEffect(() => {
    setCurrentPage(1);
  }, [deferredSearch]);

  // logout model close when user click outside 
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!profileMenuRef.current?.contains(event.target as Node)) {
        setIsProfileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = async () => {
    if (!title) return;

    try {
      const nextPage = editId ? currentPage : 1;

      if (editId) {
        await api.patch(`/tasks/${editId}`, { title, description });
        setEditId(null);
      } else {
        await api.post("/tasks", { title, description });
      }

      setTitle("");
      setDescription("");
      fetchTasks(nextPage, deferredSearch);
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

      const nextPage = tasks.length === 1 && currentPage > 1 ? currentPage - 1 : currentPage;
      
      fetchTasks(nextPage, deferredSearch);
    } catch (err) {
      console.error("Failed to delete task", err);
    }
  };

  // toggle task status === completed ? pending: completed 
  const handleToggleStatus = async (id: string) => {
    setActiveTaskId(id);
    try {
      await api.patch(`/tasks/${id}/toggle`);
      fetchTasks(currentPage, deferredSearch);
      
    } catch (err) {
      console.error("Failed to toggle task status", err);
    } finally {
      setActiveTaskId(null);
    }
  };

  const handleLogout = async () => {
    try {
      await api.post("/auth/logout");
    } catch (err) {
      console.error("Failed to logout cleanly", err);
    } finally {
      setIsProfileMenuOpen(false);
      localStorage.removeItem("token");
      router.push("/login");
    }
  };

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) {
      return;
    }

    fetchTasks(page, deferredSearch);
  };

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

            <div className="flex flex-wrap gap-3 items-center">
              <Link
                href="https://portfolio-beta-dusky-34.vercel.app/"
                className="rounded-2xl border border-white/15 bg-white/10 px-5 py-3 font-semibold text-white hover:bg-white/15"
              >
                Portfolio
              </Link>
              <div className="relative" ref={profileMenuRef}>
                <button
                  type="button"
                  onClick={() => setIsProfileMenuOpen((open) => !open)}
                  className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-3 py-2 hover:bg-white/15"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-400 text-base font-black text-slate-950">
                    {userInitial}
                  </div>
                  <div className="hidden text-left sm:block">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
                      Signed in
                    </p>
                    <p className="mt-1 font-semibold text-white">
                      {user?.name || "User"}
                    </p>
                  </div>
                </button>

                {isProfileMenuOpen ? (
                  <div className="absolute right-0 top-full z-10 mt-3 w-56 rounded-3xl border border-slate-200 bg-white p-3 text-slate-900 shadow-[0_24px_70px_-30px_rgba(15,23,42,0.55)]">
                    <div className="border-b border-slate-100 px-3 pb-3">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                        Signed in as
                      </p>
                      <p className="mt-1 font-semibold text-slate-900">
                        {user?.name || "User"}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="mt-3 w-full rounded-2xl bg-rose-50 px-4 py-3 text-left font-semibold text-rose-700 ring-1 ring-rose-100 hover:bg-rose-100"
                    >
                      Logout
                    </button>
                  </div>
                ) : null}
              </div>
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
                {totalTasks} total
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
              ) : tasks.length > 0 ? (
                tasks.map((task) => (
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

            <PaginationControls
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
