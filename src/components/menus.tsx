import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import ListMenu from "./list-menu";
import ListTopping from "./topping";

export default function Menus() {
  return (
    <div className="px-5 md:px-[10%] py-10" id="menu">
      <h1 data-aos="fade-in" className="text-2xl text-red-700 font-bold mb-3">
        Menu Andalan dan Berbagai pilihan Topping
      </h1>
      <Tabs defaultValue="menus">
        <TabsList data-aos="fade-in">
          <TabsTrigger value="menus">Menu Andalan</TabsTrigger>
          <TabsTrigger value="topping">Topping</TabsTrigger>
        </TabsList>
        <TabsContent data-aos="fade-in" value="menus" className="border-none outline-none">
          <ListMenu />
        </TabsContent>
        <TabsContent data-aos="fade-in" value="topping">
          <ListTopping />
        </TabsContent>
      </Tabs>
    </div>
  );
}
