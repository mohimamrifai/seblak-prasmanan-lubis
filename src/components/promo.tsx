import { abril } from "@/lib/fonts";
import React from "react";
import { Button } from "./ui/button";

export default function Promo() {
  return (
    <div
      className={`p-20 bg-red-700 text-white text-center`}
    >
      <h3 data-aos="fade-in" className={`${abril.className} text-2xl mb-2 md:text-5xl`}>Promo Jumat!!!</h3>
      <p data-aos="fade-in">Free Topping Telur Setiap pembelian pertama di hari jumat</p>
      <Button data-aos="fade-in" className="mt-5" variant="secondary">Ambil Promo</Button>
    </div>
  );
}
