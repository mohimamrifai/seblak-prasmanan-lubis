import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { abril } from "@/lib/fonts";

export default function Hero() {
  return (
    <div className="px-5 py-10 md:py-12 flex flex-col md:flex-row-reverse md:items-center md:px-[10%]">
      <div data-aos="fade-in">
        <Image src="/logo.png" alt="hero" width={1000} height={1000} className="md:w-[600px]" />
      </div>
      <div data-aos="fade-in" className="flex flex-col gap-5">
        <h1 className={`${abril.className} text-center text-5xl md:text-6xl font-bold text-red-700 md:text-left`}>
          Racik Seblak Sesuai Selera Anda!
        </h1>
        <p className="text-center mt-3 font-extralight text-lg px-4 md:text-left md:px-0 font-light">Dengan Berbagai macam tambahan dan pilihan toping, serta sesuaikan tingkat kepedasan anda sendiri!</p>
        <div className="flex justify-center gap-2 mt-5 text-red-700 md:justify-start">
          <Button variant="outline" className="hover:bg-red-700 hover:text-white transition-all duration-300 text-base">Lihat Menu</Button>
          <Button variant="destructive" className="bg-red-700 hover:bg-red-800 transition-all duration-300 text-base">Pesan Sekarang</Button>
        </div>
      </div>
    </div>
  );
}
