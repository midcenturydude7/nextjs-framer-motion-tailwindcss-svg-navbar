"use client";
import React from "react";
import Nav from "./Nav/Nav";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "../../lib/utils";

export default function MobileNav() {
  const pathname = usePathname();
  const [isActive, setIsActive] = React.useState(false);

  React.useEffect(() => {
    if (isActive) {
      setIsActive(false);
    }
  }, [pathname]);

  return (
    <>
      <div>
        <div className="fixed right-[0] z-10 p-[30px]">
          <button
            onClick={() => setIsActive(!isActive)}
            className="flex h-[80px] w-[80px] cursor-pointer items-center justify-center rounded-full bg-slate-200/50"
          >
            <div
              className={cn(
                "w-full before:relative before:top-[5px] before:m-auto before:block before:h-px before:w-2/5 before:bg-slate-200/50 before:content-[''] before:[transition:transform_0.3s] after:relative after:-top-[5px] after:m-auto after:block after:h-px after:w-2/5 after:bg-slate-200/50 after:content-[''] after:[transition:transform_0.3s]",
                isActive
                  ? "before:top-0 before:-rotate-45 after:-top-px after:rotate-45"
                  : "",
              )}
            />
          </button>
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
