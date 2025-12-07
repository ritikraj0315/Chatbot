"use client";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    setLoading(true);
    const res = await fetch("/api/summarize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: input }),
    });

    const data = await res.json();
    setSummary(data.summary);
    setLoading(false);
  }

  return (
    <main className="min-h-screen p-10 bg-gray-50">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">
        AI Notes Summarizer
      </h1>

      <div className="text-blue-500 max-w-4xl mx-auto">
        <textarea
          className="w-full p-4 border-2 border-blue-500 rounded-lg shadow bg-white"
          rows={10}
          placeholder="Paste your text here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 disabled:bg-blue-300 transition"
        >
          {loading ? "Summarizing..." : "Summarize"}
        </button>

        {summary && (
          <div className="mt-10 p-6 bg-white border rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-3">Summary</h2>
            <p className="text-gray-700 whitespace-pre-line">{summary}</p>
          </div>
        )}
      </div>
    </main>
  );
}
