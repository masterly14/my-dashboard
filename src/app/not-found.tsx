import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">
        404
      </h1>
      <div className="bg-blue-400 px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 group-hover:translate-y-0 group-hover:translate-x-0"></span>

      <span className="relative block px-8 py-3">
        <Link href="/dashboard/pokemons">
          <Button variant="outline">Home</Button>
        </Link>
      </span>
    </main>
  );
}
