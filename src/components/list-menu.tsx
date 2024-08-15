import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";

const MENU = [
  {
    id: 1,
    name: "Seblak",
    href: "/seblak.jfif",
  },
  {
    id: 2,
    name: "Mie Ayam",
    href: "/mie-ayam.jfif",
  },
  {
    id: 3,
    name: "Bakso",
    href: "/bakso.jfif",
  },
  {
    id: 4,
    name: "Ketoprak",
    href: "/ketoprak.jfif",
  },
  {
    id: 5,
    name: "Soto Ayam",
    href: "/soto-ayam.jfif",
  },
];

export default function ListMenu() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 justify-between">
      {MENU.map((item) => (
        <Card className="overflow-hidden group" key={item.id}>
          <Image src={item.href} alt={item.name} width={1000} height={1000} className="h-48 group-hover:scale-105 duration-300 transition-all object-cover" />
          <div className="p-3">
            <h2 className="font-bold text-red-700">{item.name}</h2>
          </div>
        </Card>
      ))}
    </div>
  );
}
