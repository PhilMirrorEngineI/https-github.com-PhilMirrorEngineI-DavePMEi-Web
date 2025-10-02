"use client";

import * as React from "react";

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-yellow-400/40 bg-black/70 text-white p-4 shadow-lg">
      {children}
    </div>
  );
}
