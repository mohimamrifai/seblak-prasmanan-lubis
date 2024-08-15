import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";

const TOPPING = [
  {
    id: 1,
    name: "Telor Ayam",
    href: "/telor.jfif",
  },
  {
    id: 2,
    name: "Jamur Enoki",
    href: "/jamur-enoki.jfif",
  },
  {
    id: 3,
    name: "Baso",
    href: "/topping-bakso.jfif",
  },
  {
    id: 4,
    name: "Ceker",
    href: "/ceker.jfif",
  },
  {
    id: 5,
    name: "Lidah",
    href: "/cuanki-lidah.jfif",
  },
];

export default function ListTopping() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 justify-between">
      {TOPPING.map((item) => (
        <Card className="overflow-hidden group" key={item.id}>
          <Image
            src={item.href}
            alt={item.name}
            width={1000}
            height={1000}
            className="h-48 group-hover:scale-105 duration-300 transition-all object-cover"
          />
          <div className="p-3">
            <h2 className="font-bold text-red-700">{item.name}</h2>
          </div>
        </Card>
      ))}
    </div>
  );
}
