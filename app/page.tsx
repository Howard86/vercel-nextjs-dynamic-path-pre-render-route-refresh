import Image from "next/image";
import Link from "next/link";
import { DYNAMIC_PATHS } from "./dynamic/[path]/page";

export default function Home() {
  return (
    <>
      <nav className="flex gap-2">
        <h2>Dynamic Pages </h2>
        {DYNAMIC_PATHS.map((path) => (
          <Link
            key={path}
            href={`/dynamic/${path}`}
            className="border p-1 rounded-md"
          >
            Page {path}
          </Link>
        ))}
      </nav>

      <h1>This is Static Page (/)</h1>
    </>
  );
}
