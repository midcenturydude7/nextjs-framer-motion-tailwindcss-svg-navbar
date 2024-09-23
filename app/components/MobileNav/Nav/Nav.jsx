"use client";
import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "../../../lib/anim";
import Links from "./Links/Links";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Nav() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = React.useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="fixed right-[0] top-0 z-[1] h-[100vh] w-[85vw] bg-slate-200 text-slate-800"
    >
      <div className="box-border flex h-full flex-col justify-between p-16">
        <div
          onMouseLeave={() => setSelectedIndicator(pathname)}
          className="mt-[80px] flex flex-col gap-[12px] text-[56px]"
        >
          <div className="mb-[40px] border-b-[1px_solid_rgb(153,_153,_153)] text-[11px] uppercase text-slate-800">
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => (
            <Links
              key={index}
              data={{ ...data, index }}
              isActive={selectedIndicator == data.href}
              setSelectedIndicator={setSelectedIndicator}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
