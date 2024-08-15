'use client'
import Address from "@/components/address";
import Blog from "@/components/blog";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Menus from "@/components/menus";
import Navbar from "@/components/navbar";
import OrderForm from "@/components/order-form";
import Promo from "@/components/promo";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      delay: 100,
      duration: 1200,
    });
  }, []);
  return (
    <main>
      <Navbar />
      <div className="h-[80px]"></div>
      <Hero />
      <Menus />
      <Promo />
      <OrderForm />
      <Address />
      <Blog />
      <Footer />
      <CallToAction />
    </main>
  );
}
