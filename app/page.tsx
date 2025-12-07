import React from "react";
import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6 bg-gradient-to-b from-white to-gray-100">
        <h1 className="text-5xl font-extrabold tracking-tight mb-6">
          Welcome to <span className="text-blue-600">Pro-Jec-T</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mb-8">
          I have No idea what to do
        </p>
        <div className="flex gap-4">
          <Link
            href="/summarizer"
            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
          <a
            href="#features"
            className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-200 transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-28 px-8 bg-white">
        <h2 className="text-4xl font-bold text-center mb-16">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="p-8 rounded-2xl shadow bg-gray-50">
            <h3 className="text-2xl font-semibold mb-3">Fast Uploads</h3>
            <p className="text-gray-600">Upload images quickly with drag-and-drop support.</p>
          </div>
          <div className="p-8 rounded-2xl shadow bg-gray-50">
            <h3 className="text-2xl font-semibold mb-3">Advanced Search</h3>
            <p className="text-gray-600">Locate images using tags, metadata, or AI-driven search.</p>
          </div>
          <div className="p-8 rounded-2xl shadow bg-gray-50">
            <h3 className="text-2xl font-semibold mb-3">Secure Storage</h3>
            <p className="text-gray-600">Your images stay safe with encrypted cloud storage.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-blue-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to start managing your images?</h2>
        <p className="text-lg mb-8">Set up your dashboard and begin uploading in seconds.</p>
        <a
          href="#upload"
          className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold shadow hover:bg-gray-100 transition"
        >
          Launch App
        </a>
      </section>
    </main>
  );
}
