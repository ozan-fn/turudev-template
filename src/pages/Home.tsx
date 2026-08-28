import { Link } from "react-router";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Welcome</h1>
      <Link
        to="/login"
        className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
      >
        Login
      </Link>
    </main>
  );
}
