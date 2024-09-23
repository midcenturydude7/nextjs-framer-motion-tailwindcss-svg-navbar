import Link from "next/link";
import { motion } from "framer-motion";
import { slide, scale } from "../../../../lib/anim";

export default function Links({ data, isActive, setSelectedIndicator }) {
  const { title, href, index } = data;

  return (
    <motion.div
      className="relative flex items-center"
      onMouseEnter={() => setSelectedIndicator(href)}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className="absolute -left-[30px] h-[10px] w-[10px] rounded-full bg-slate-800"
      />
      <Link href={href}>{title}</Link>
    </motion.div>
  );
}
