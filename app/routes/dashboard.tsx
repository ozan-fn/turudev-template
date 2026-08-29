import { redirect, useNavigate } from "react-router";
import { auth } from "~/lib/auth.server";
import { authClient } from "~/lib/auth-client";
import type { Route } from "./+types/dashboard";

export async function loader({ request }: Route.LoaderArgs) {
  const session = await auth.api.getSession({ headers: request.headers });
  if (!session) throw redirect("/login");
  return { user: session.user };
}

export default function Dashboard({ loaderData }: Route.ComponentProps) {
  const { user } = loaderData;
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">{user.name || user.email}</span>
            <button
              onClick={() => authClient.signOut({ fetchOptions: { onSuccess: () => navigate("/login") } })}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 text-sm"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto p-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Welcome, {user.name || "User"}!</h2>
          <p className="text-gray-600">You are logged in as {user.email}</p>
        </div>
      </main>
    </div>
  );
}
