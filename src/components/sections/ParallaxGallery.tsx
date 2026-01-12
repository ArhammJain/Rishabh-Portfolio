"use client"

import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils"; // Ensure you have the cn utility from shadcn

// 1. Define the Interface for Column Props
interface ColumnProps {
  images: string[];
  y: MotionValue<number>;
  className?: string;
}

const images: string[] = [
  "/Rishabh/IMG_0962.JPG",
  "/Rishabh/IMG_1668.PNG",
  "/Rishabh/IMG_1734.JPG",
  "/Rishabh/IMG_2500.JPG",
  "/Rishabh/IMG_2721.JPG",
  "/Rishabh/IMG_2979.PNG",
  "/Rishabh/IMG_2654.JPG",
  "/Rishabh/IMG_2550.JPG",
  "/Rishabh/IMG_2654.JPG",
];

export default function ParallaxGallery() {
  const container = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  // Speed variance for parallax depth
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -700]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -450]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -900]);

  return (
    <section id="gallery" ref={container} className="relative h-[175vh] bg-black overflow-hidden pt-32">
      <div className="absolute top-16 left-1/2 -translate-x-1/2 text-center z-10 w-full px-6">
        {/* <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[10px] uppercase tracking-[1em] text-zinc-500 block mb-4"
        >
          Visual Archive
        </motion.span> */}
        {/* <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white">
          Selected <span className="font-serif italic font-light text-zinc-500 tracking-normal">Works</span>
        </h2> */}
      </div>

      <div className="flex gap-[2vw] h-full p-[2vw] box-border mt-20">
        <Column images={[images[0], images[1], images[2]]} y={y1} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} className="hidden md:flex" />
        <Column images={[images[2], images[5], images[0]]} y={y4} className="hidden lg:flex" />
      </div>
    </section>
  );
}

// 2. Type-Safe Column Component
const Column = ({ images, y, className }: ColumnProps) => {
  return (
    <motion.div 
      style={{ y }} 
      className={cn(
        "relative flex flex-col gap-[2vw] w-full min-w-250px",
        className
      )}
    >
      {images.map((src, i) => (
        <div key={`${src}-${i}`} className="relative h-[33%] w-full rounded-sm overflow-hidden group">
          <Image 
            src={src} 
            alt="Portfolio Editorial" 
            fill 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.5s] ease-out"
          />
          {/* Subtle Overlay on Hover */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        </div>
      ))}
    </motion.div>
  );
};