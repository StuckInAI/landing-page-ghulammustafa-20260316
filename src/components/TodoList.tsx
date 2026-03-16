"use client";

import { useState, useEffect, useCallback } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoItem, { TodoData } from "./TodoItem";

type FilterStatus = "all" | "active" | "completed";

export default function TodoList() {
  const [todos, setTodos] = useState<TodoData[]>([]);
  const [filter, setFilter] = useState<FilterStatus>("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchTodos = useCallback(async (status: FilterStatus) => {
    setLoading(true);
    setError("");
    try {
      const url = status === "all" ? "/api/todos" : `/api/todos?status=${status}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setTodos(data);
    } catch {
      setError("Failed to load todos. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTodos(filter);
  }, [filter, fetchTodos]);

  const handleAdd = async (title: string, description?: string) => {
    const res = await fetch("/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    });
    if (!res.ok) throw new Error("Failed to create");
    await fetchTodos(filter);
  };

  const handleToggle = async (id: number, completed: boolean) => {
    const res = await fetch(`/api/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed }),
    });
    if (!res.ok) throw new Error("Failed to update");
    await fetchTodos(filter);
  };

  const handleUpdate = async (id: number, title: string, description?: string) => {
    const res = await fetch(`/api/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description: description || null }),
    });
    if (!res.ok) throw new Error("Failed to update");
    await fetchTodos(filter);
  };

  const handleDelete = async (id: number) => {
    const res = await fetch(`/api/todos/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Failed to delete");
    await fetchTodos(filter);
  };

  const allTodos = todos;
  const completedCount = allTodos.filter((t) => t.completed).length;
  const totalCount = allTodos.length;

  const filterButtons: { label: string; value: FilterStatus }[] = [
    { label: "All", value: "all" },
    { label: "Active", value: "active" },
    { label: "Completed", value: "completed" },
  ];

  return (
    <div>
      <AddTodoForm onAdd={handleAdd} />

      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        {/* Filter Bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
          <div className="flex gap-1">
            {filterButtons.map((btn) => (
              <button
                key={btn.value}
                onClick={() => setFilter(btn.value)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition ${
                  filter === btn.value
                    ? "bg-indigo-600 text-white"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
          <span className="text-xs text-gray-400">
            {completedCount} of {totalCount} completed
          </span>
        </div>

        {/* Content */}
        <div className="p-4">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-500 text-sm mb-3">{error}</p>
              <button
                onClick={() => fetchTodos(filter)}
                className="text-indigo-600 text-sm hover:underline"
              >
                Try again
              </button>
            </div>
          ) : todos.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-4xl mb-3">
                {filter === "completed" ? "🎉" : filter === "active" ? "✅" : "📋"}
              </p>
              <p className="text-gray-500 text-sm">
                {filter === "completed"
                  ? "No completed todos yet."
                  : filter === "active"
                  ? "No active todos! All done."
                  : "No todos yet. Add one above!"}
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={handleToggle}
                  onUpdate={handleUpdate}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer summary */}
        {!loading && !error && todos.length > 0 && (
          <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 text-xs text-gray-400 text-center">
            Showing {todos.length} {filter === "all" ? "" : filter}{" "}
            {todos.length === 1 ? "todo" : "todos"}
          </div>
        )}
      </div>
    </div>
  );
}
