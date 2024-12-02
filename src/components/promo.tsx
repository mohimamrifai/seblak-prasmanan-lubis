import { abril } from "@/lib/fonts";
import React from "react";
import { Button } from "./ui/button";

export default function Promo() {
  return (
    <div
      className={`p-10 md:p-20 bg-red-700 text-white text-center`}
    >
      <h3 data-aos="fade-in" className={`${abril.className} text-2xl mb-2 md:text-5xl md:mb-5`}>Promo setiap hari Jumat!!!</h3>
      <p data-aos="fade-in">Free Topping Telur untuk 50 pembelian pertama di hari Jumat</p>
      <Button data-aos="fade-in" className="mt-5" variant="secondary" size="lg">Ambil Promo</Button>
    </div>
  );
}
