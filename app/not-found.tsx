// app/not-found.tsx
"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-2xl font-bold mb-4">Ops!</h1>
      <p className="text-gray-600 mb-6">
        Você tentou acessar uma página restrita.<br/> Faça login para continuar ou volte para a página inicial.
      </p>
      <Link
        href="/"
        className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        Voltar para a página inicial
      </Link>
    </div>
  );
}
