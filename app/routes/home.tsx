import { redirect, Link } from "react-router";
import { auth } from "~/lib/auth.server";
import type { Route } from "./+types/home";

export function meta() {
  return [{ title: "TuruDev" }];
}

export async function loader({ request }: Route.LoaderArgs) {
  const session = await auth.api.getSession({ headers: request.headers });
  if (session) throw redirect("/dashboard");
  return null;
}

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">TuruDev</h1>
        <p className="text-gray-600 mb-8">Welcome to TuruDev</p>
        <Link
          to="/login"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
