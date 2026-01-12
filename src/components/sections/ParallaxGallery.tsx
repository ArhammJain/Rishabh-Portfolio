"use client"

import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

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

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -350]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -700]);

  return (
    <section id="gallery" ref={container} className="relative h-[150vh] md:h-[175vh] bg-black overflow-hidden pt-20 md:pt-32">
      <div className="flex gap-[3vw] md:gap-[2vw] h-full p-[3vw] md:p-[2vw] box-border mt-10 md:mt-20">
        <Column images={[images[0], images[1], images[2]]} y={y1} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} className="hidden md:flex" />
        <Column images={[images[2], images[5], images[0]]} y={y4} className="hidden lg:flex" />
      </div>
    </section>
  );
}

const Column = ({ images, y, className }: ColumnProps) => {
  return (
    <motion.div 
      style={{ y }} 
      className={cn(
        "relative flex flex-col gap-[3vw] md:gap-[2vw] w-full min-w-120px md:min-w-250px",
        className
      )}
    >
      {images.map((src, i) => (
        <motion.div 
          key={`${src}-${i}`} 
          // Reveal color when 40% of the image is in view on mobile
          initial={{ filter: "grayscale(100%)" }}
          whileInView={{ filter: "grayscale(0%)" }}
          viewport={{ once: false, amount: 0.4 }}
          className="relative h-[30%] md:h-[33%] w-full rounded-sm overflow-hidden group"
        >
          <Image 
            src={src} 
            alt="Portfolio Editorial" 
            fill 
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="object-cover transition-all duration-1s ease-out group-hover:scale-110 active:scale-105"
          />
          {/* Subtle Overlay on Hover/Tap */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-700 pointer-events-none" />
        </motion.div>
      ))}
    </motion.div>
  );
};