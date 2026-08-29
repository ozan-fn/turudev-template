import { useState } from "react";
import { useNavigate } from "react-router";
import { authClient } from "~/lib/auth-client";

export function meta() {
  return [{ title: "Sign in — TuruDev" }];
}

const field =
  "w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm placeholder:text-neutral-500 focus:border-neutral-300 focus:outline-none";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const onSuccess = () => navigate("/dashboard");

    if (isSignUp) {
      await authClient.signUp.email(
        { email, password, name },
        {
          onSuccess,
          onError: (ctx) => setError(ctx.error.message),
        }
      );
    } else {
      await authClient.signIn.email(
        { email, password },
        {
          onSuccess,
          onError: (ctx) => setError(ctx.error.message),
        }
      );
    }
    setLoading(false);
  };

  return (
    <div className="flex min-h-dvh items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <h1 className="text-xl font-semibold tracking-tight">
          {isSignUp ? "Create an account" : "Sign in"}
        </h1>
        <p className="mt-1 text-sm text-neutral-500">Welcome to TuruDev</p>

        {error && (
          <div className="mt-4 rounded-lg border border-red-800 bg-red-950 px-3 py-2 text-sm text-red-300">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {isSignUp && (
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={field}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={field}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={field}
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full cursor-pointer rounded-lg bg-neutral-100 py-2 text-sm font-medium text-neutral-900 hover:bg-white disabled:opacity-50"
          >
            {loading ? "Loading..." : isSignUp ? "Sign up" : "Sign in"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-neutral-500">
          {isSignUp ? "Already have an account?" : "No account?"}{" "}
          <button
            onClick={() => { setIsSignUp(!isSignUp); setError(""); }}
            className="cursor-pointer font-medium text-neutral-100 hover:underline"
          >
            {isSignUp ? "Sign in" : "Sign up"}
          </button>
        </p>
      </div>
    </div>
  );
}
