import { useOutletContext, useNavigate } from "react-router";
import { authClient } from "~/lib/auth-client";
import { Navbar } from "~/components/navbar";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";

export function meta() {
  return [{ title: "Dashboard — TuruDev" }];
}

export default function Dashboard() {
  const { user } = useOutletContext<{ user: { name?: string | null; email: string } }>();
  const navigate = useNavigate();

  return (
    <div className="min-h-dvh">
      <Navbar>
        <span className="text-sm text-muted-foreground">{user.name || user.email}</span>
        <Button
          variant="outline"
          size="sm"
          onClick={() => authClient.signOut({ fetchOptions: { onSuccess: () => navigate("/login") } })}
        >
          Logout
        </Button>
      </Navbar>

      <main className="mx-auto max-w-5xl px-6 py-10">
        <Card>
          <CardHeader>
            <CardTitle>Welcome, {user.name || "User"}!</CardTitle>
            <CardDescription>Signed in as {user.email}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              This is a protected dashboard. Only authenticated users can see it.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
