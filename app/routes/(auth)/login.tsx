import { useState } from "react";
import { useNavigate } from "react-router";
import { authClient } from "~/lib/auth-client";
import { Navbar } from "~/components/navbar";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export function meta() {
  return [{ title: "Sign in — TuruDev" }];
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    await authClient.signIn.email(
      { email, password },
      {
        onSuccess: () => navigate("/dashboard"),
        onError: (ctx) => setError(ctx.error.message),
      }
    );
    setLoading(false);
  };

  return (
    <div className="min-h-dvh">
      <Navbar />

      <main className="flex min-h-[calc(100dvh-57px)] items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <h1 className="text-xl font-semibold tracking-tight">Sign in</h1>
          <p className="mt-1 text-sm text-muted-foreground">Welcome back to TuruDev</p>

          {error && (
            <div className="mt-4 rounded-lg border border-destructive/50 bg-destructive/10 px-3 py-2 text-sm text-destructive">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Loading..." : "Sign in"}
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}
