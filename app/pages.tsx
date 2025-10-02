"use client";

import React, { useState } from "react";
import Button from "./components/ui/button";
import Card from "./components/ui/card";
import DaveChat from "./components/dave-chat";
import DonateSection from "./components/donatesection";

export default function HomePage() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [authMode, setAuthMode] = useState<"Login" | "Register">("Login");

  const handleLogin = () => {
    console.log("Logging in...");
    setShowLoginModal(false);
  };

  const handleRegister = () => {
    console.log("Registering...");
    setShowLoginModal(false);
  };

  const handleLogout = () => {
    console.log("Logged out");
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-0">
        <div className="absolute inset-0 bg-black opacity-80" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/att.d3MYpROT21CVVlCwqmfjzrBhWkeNqOeT/cover.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-15">
        <div
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.3) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            animation: "gridMove 30s linear infinite",
          }}
          className="w-full h-full"
        />
      </div>

      {/* Header */}
      <header className="relative z-10 p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-yellow-400 drop-shadow-lg">
          PhilMirrorEnginei.Ai
        </h1>
        <nav>
          <ul className="flex space-x-6 text-white">
            <li>
              <a href="#about" className="hover:text-yellow-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#chat" className="hover:text-yellow-400 transition">
                Chat
              </a>
            </li>
            <li>
              <a href="#donate" className="hover:text-yellow-400 transition">
                Donate
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-20">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-white drop-shadow-md mb-6">
            Next-Gen AI Orchestration
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Lawful recursion, memory persistence, and symbolic anchors powering
            a new age of AI. Step into the didactic journey.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <Button onClick={() => setShowLoginModal(true)}>Get Started</Button>
            <a
              href="#donate"
              className="px-6 py-2 rounded bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
            >
              Donate £5
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-20">
          <h3 className="text-3xl font-bold text-yellow-400 mb-6">
            Our Process
          </h3>
          <p className="text-gray-300 leading-relaxed">
            We’ve shown this isn’t just an idea. PhilMirrorEnginei.Ai has:
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card>Recursive AI loops with lawful constraints</Card>
            <Card>Memory save & recall with persistence</Card>
            <Card>Symbolic anchors for grounded reasoning</Card>
          </div>
        </section>

        {/* Chat Section */}
        <section id="chat" className="mb-20">
          <h3 className="text-3xl font-bold text-yellow-400 mb-6">
            Try the AI Chat
          </h3>
          <DaveChat />
        </section>

        {/* Donate Section */}
        <section id="donate" className="mb-20">
          <h3 className="text-3xl font-bold text-yellow-400 mb-6">
            Support the Project
          </h3>
          <DonateSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} PhilMirrorEnginei.Ai — All Rights
        Reserved
      </footer>

      {/* Login/Register Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">{authMode}</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                authMode === "Login" ? handleLogin() : handleRegister();
              }}
              className="space-y-4"
            >
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded"
              />
              <Button type="submit">{authMode}</Button>
            </form>
            <div className="mt-4 text-sm text-gray-600">
              {authMode === "Login" ? (
                <>
                  Don’t have an account?{" "}
                  <button
                    onClick={() => setAuthMode("Register")}
                    className="text-yellow-600 font-bold"
                  >
                    Register
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <button
                    onClick={() => setAuthMode("Login")}
                    className="text-yellow-600 font-bold"
                  >
                    Login
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* CSS animation for grid */}
      <style jsx>{`
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
      `}</style>
    </div>
  );
}
