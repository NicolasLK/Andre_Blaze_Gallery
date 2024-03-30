import { Camera } from "phosphor-react";

export function Header() {
  return (
    <header className="w-full bg-zinc-300 flex p-4 items-center justify-around rounded-b-xl drop-shadow-xl">
      <section className="flex items-center gap-3">
        <Camera size={32} weight="fill" />
        Andre
      </section>
      <nav className="flex items-center gap-8">
        <a href="" className="p-1">
          Home
        </a>
        <a href="" className="p-1">
          About
        </a>
        <a href="" className="p-1">
          Contact
        </a>
      </nav>
    </header>
  );
}
