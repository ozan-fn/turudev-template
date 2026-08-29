import { Link } from "react-router";

export function meta() {
  return [
    { title: "TuruDev" },
    { name: "description", content: "TuruDev — a minimal starter with authentication wired in." },
  ];
}

export default function Home() {
  return (
    <div className="min-h-dvh">
      <header className="border-b border-neutral-800">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-sm font-semibold tracking-tight">TuruDev</span>
          <div className="flex items-center gap-3">
            <Link to="/login" className="text-sm font-medium text-neutral-400 hover:text-neutral-100">
              Sign in
            </Link>
            <Link
              to="/login"
              className="rounded-lg bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-white"
            >
              Get started
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="max-w-xl text-4xl font-semibold tracking-tight">
          Build things that ship.
        </h1>
        <p className="mt-4 max-w-lg text-neutral-400">
          A minimal starter with authentication wired in.
        </p>
      </main>
    </div>
  );
}
