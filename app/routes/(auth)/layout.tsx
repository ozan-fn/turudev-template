import { redirect, Outlet } from "react-router";
import { auth } from "~/lib/auth.server";

export const loader = async ({ request }: { request: Request }) => {
  const session = await auth.api.getSession({ headers: request.headers });
  if (session) throw redirect("/dashboard");
  return null;
};

export default function AuthLayout() {
  return <Outlet />;
}
