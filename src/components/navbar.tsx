import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

const LINKS = [
  {
    id: 1,
    name: "Menu",
    href: "/menu",
  },
  {
    id: 2,
    name: "Lokasi",
    href: "/lokasi",
  },
  {
    id: 3,
    name: "Pesan Online",
    href: "/pesan-online",
  },
  {
    id: 4,
    name: "Kontak",
    href: "/kontak",
  },
];

export default function Navbar() {
  return (
    <div className="px-5 py-2 flex justify-between items-center fixed top-0 w-full bg-white shadow-md">
      <Link href="/" className="flex items-center">
        <Image
          className="w-14 h-14 md:h-16 md:w-16"
          src="/logo.png"
          alt="logo"
          width={1000}
          height={1000}
        />
        <h1 className="text-base font-bold text-red-700 md:text-2xl">
          Seblak Prasmanan Lubis
        </h1>
      </Link>

      <div className="hidden md:flex gap-10">
        {LINKS.map((item) => (
          <Link
            className="text-red-400 hover:text-red-700 transition-all duration-300 hover:font-bold"
            key={item.id}
            href={item.href}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu className="w-6 h-6 text-red-700" />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-3">
          {LINKS.map((item) => (
            <Link
              className="text-red-400 hover:text-red-700 transition-all duration-300 hover:font-bold"
              key={item.id}
              href={item.href}
            >
              {item.name}
            </Link>
          ))}
        </SheetContent>
      </Sheet>
    </div>
  );
}
