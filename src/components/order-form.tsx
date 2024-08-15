import React from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import Image from "next/image";

export default function OrderForm() {
  return (
    <div className="p-10 flex flex-col">
      <h2 className="text-2xl text-red-700 font-bold mb-5 text-center">
        Pesan Dari Rumah
      </h2>
      <div className="flex flex-col-reverse gap-5 md:flex-row md:gap-10">
        <div data-aos="fade-in" className="md:w-6/12 flex justify-end group">
          <Image
            src="/toko-seblak.jfif"
            alt="toko seblak"
            width={1000}
            height={1000}
            className="w-80 h-80 object-cover rounded group-hover:scale-95 transition-all duration-300"
          />
        </div>
        <form data-aos="fade-in" className="flex flex-col space-y-4 md:mx-auto md:w-6/12">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="nama">Nama</Label>
            <Input type="text" id="nama" placeholder="Nama" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="alamat">Alamat</Label>
            <Input type="text" id="alamat" placeholder="Alamat" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="pesanan">Catatan Pesanan</Label>
            <Textarea placeholder="Seblak pedas dengan tambahan topping telor..."></Textarea>
          </div>
          <Button variant="destructive" className="w-max">
            Pesan
          </Button>
        </form>
      </div>
    </div>
  );
}
