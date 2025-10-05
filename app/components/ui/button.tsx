"use client";

export default function Button({ children, ...props }: React.HTMLProps<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded transition ${props.className || ""}`}
    >
      {children}
    </button>
  );
}
