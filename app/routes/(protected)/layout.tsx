import { redirect } from "react-router";
import { Outlet, useLoaderData } from "react-router";
import { auth } from "~/lib/auth.server";

export const loader = async ({ request }: { request: Request }) => {
  const session = await auth.api.getSession({ headers: request.headers });
  if (!session) throw redirect("/login");
  return { user: session.user };
};

export default function ProtectedLayout() {
  const { user } = useLoaderData<typeof loader>();
  return <Outlet context={{ user }} />;
}
