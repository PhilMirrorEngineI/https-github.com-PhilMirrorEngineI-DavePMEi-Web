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
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/atlas.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-15">
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
      </div>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-20">
        {/* About Section */}
        <section id="about" className="mb-20">
          <h3 className="text-3xl font-bold text-yellow-400 mb-6">
            Our Process
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
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
        &copy; {new Date().getFullYear()} PhilMirrorEngineI.AI – All Rights
        Reserved.
      </footer>
    </div>
  );
}
