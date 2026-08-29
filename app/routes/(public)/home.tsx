import { Link } from "react-router";
import { Navbar } from "~/components/navbar";
import { buttonVariants } from "~/components/ui/button";

export function meta() {
  return [
    { title: "TuruDev" },
    { name: "description", content: "TuruDev — a minimal starter with authentication wired in." },
  ];
}

export default function Home() {
  return (
    <div className="min-h-dvh">
      <Navbar>
        <Link to="/login" className={buttonVariants({ variant: "ghost", size: "sm" })}>
          Sign in
        </Link>
        <Link to="/login" className={buttonVariants({ size: "sm" })}>
          Get started
        </Link>
      </Navbar>

      <main className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="max-w-xl text-4xl font-semibold tracking-tight">
          Build things that ship.
        </h1>
        <p className="mt-4 max-w-lg text-lg text-muted-foreground">
          A minimal starter with authentication wired in.
        </p>
      </main>
    </div>
  );
}
