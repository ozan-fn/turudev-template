import { Link } from "react-router";

export function Navbar({ children }: { children?: React.ReactNode }) {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-sm font-semibold tracking-tight">
          TuruDev
        </Link>
        {children && <div className="flex items-center gap-2">{children}</div>}
      </div>
    </header>
  );
}
