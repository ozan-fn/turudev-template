import { useOutletContext, useNavigate } from "react-router";
import { authClient } from "~/lib/auth-client";

export function meta() {
  return [{ title: "Dashboard — TuruDev" }];
}

export default function Dashboard() {
  const { user } = useOutletContext<{ user: { name?: string | null; email: string } }>();
  const navigate = useNavigate();

  return (
    <div className="min-h-dvh">
      <header className="border-b border-neutral-800">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-sm font-semibold tracking-tight">TuruDev</span>
          <div className="flex items-center gap-4">
            <span className="text-sm text-neutral-400">{user.name || user.email}</span>
            <button
              onClick={() => authClient.signOut({ fetchOptions: { onSuccess: () => navigate("/login") } })}
              className="cursor-pointer rounded-lg border border-neutral-700 px-3 py-1.5 text-sm text-neutral-300 hover:border-neutral-100 hover:text-neutral-100"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-10">
        <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-6">
          <h2 className="text-lg font-semibold tracking-tight">
            Welcome, {user.name || "User"}!
          </h2>
          <p className="mt-1 text-sm text-neutral-400">Signed in as {user.email}</p>
        </div>
      </main>
    </div>
  );
}
