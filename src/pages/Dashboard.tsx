import { useState } from "react";
import { useNavigate } from "react-router";
import { authClient } from "../lib/auth-client";

export default function Dashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { data: session, isPending } = authClient.useSession();

  async function handleLogout() {
    setLoading(true);
    await authClient.signOut();
    setLoading(false);
    navigate("/login");
  }

  if (isPending) return <p className="min-h-screen flex items-center justify-center">Loading...</p>;
  if (!session) {
    navigate("/login");
    return null;
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="text-gray-600">Welcome, {session.user.name}</p>
      <button
        type="button"
        onClick={handleLogout}
        disabled={loading}
        className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Loading..." : "Logout"}
      </button>
    </main>
  );
}
