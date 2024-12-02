import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

const posts = [
  {
    id: 1,
    title: "Seblak Prasmanan Viral di Indramayu",
    excerpt:
      "Seblak prasmanan ini sedang viral di Indramayu, menghadirkan pengalaman makan seblak dengan konsep unik di mana pengunjung bisa meracik sendiri bahan seblak favorit mereka.",
  },
  {
    id: 2,
    title: "Cara Membuat Seblak Prasmanan di Rumah",
    excerpt:
      "Ingin mencoba seblak prasmanan di rumah? Simak tips dan bahan-bahan yang perlu disiapkan untuk membuat seblak prasmanan lezat dan sesuai selera Anda.",
  },
  {
    id: 3,
    title: "Seblak Prasmanan: Tren Kuliner Baru di Kalangan Milenial",
    excerpt:
      "Seblak prasmanan kini menjadi tren di kalangan milenial, terutama bagi mereka yang suka mengeksplorasi kuliner dengan variasi topping dan bumbu sesuai selera.",
  },
];

export default function Blog() {
  return (
    <div className="py-10 md:py-16 px-5 md:px-[10%]" id="blog">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {posts.map((item) => (
          <Card data-aos="fade-in" className="overflow-hidden group" key={item.id}>
            <Image
              src={"/seblak.webp"}
              alt={item.title}
              width={1000}
              height={1000}
              className="h-48 group-hover:scale-105 duration-300 transition-all object-cover"
            />
            <div className="p-3">
              <h2 className="font-bold text-red-700 text-xl mb-3">{item.title}</h2>
              <p className="text-sm text-muted-foreground mb-3">{item.excerpt}</p>
              <Button variant="destructive">Selenglapnya</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
