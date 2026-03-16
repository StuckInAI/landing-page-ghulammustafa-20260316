"use client";

import { useState } from "react";

interface AddTodoFormProps {
  onAdd: (title: string, description?: string) => Promise<void>;
}

export default function AddTodoForm({ onAdd }: AddTodoFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [expanded, setExpanded] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Title is required");
      return;
    }
    setError("");
    setLoading(true);
    try {
      await onAdd(title.trim(), description.trim() || undefined);
      setTitle("");
      setDescription("");
      setExpanded(false);
    } catch {
      setError("Failed to add todo. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 mb-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-3">Add New Todo</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <input
            type="text"
            placeholder="What needs to be done?"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              if (e.target.value && !expanded) setExpanded(true);
            }}
            onFocus={() => setExpanded(true)}
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition"
            disabled={loading}
          />
        </div>

        {expanded && (
          <div>
            <textarea
              placeholder="Description (optional)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={2}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition resize-none"
              disabled={loading}
            />
          </div>
        )}

        {error && (
          <p className="text-red-500 text-xs">{error}</p>
        )}

        <div className="flex gap-2">
          <button
            type="submit"
            disabled={loading || !title.trim()}
            className="flex-1 bg-indigo-600 text-white rounded-lg py-2.5 text-sm font-medium hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            {loading ? "Adding..." : "Add Todo"}
          </button>
          {expanded && (
            <button
              type="button"
              onClick={() => {
                setExpanded(false);
                setTitle("");
                setDescription("");
                setError("");
              }}
              className="px-4 py-2.5 text-sm text-gray-500 hover:text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
              disabled={loading}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
