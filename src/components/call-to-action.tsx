
import { Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function CallToAction() {
  return (
    <Link href="#" className="fixed bottom-5 right-5 z-50 animate-bounce bg-white p-4 rounded-full border-2 border-red-700">
      <Phone className="text-red-700 w-6 h-6" />
    </Link>
  );
}
