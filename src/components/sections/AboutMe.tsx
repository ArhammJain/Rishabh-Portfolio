"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const items = [
  { id: "1", title: "Who am I?", content: "I’m Rishabh Manwatkar, a Mumbai based fashion model and creative with a strong focus on editorial, high fashion, and concept driven visual work. I approach modeling as a form of expression, not just appearance." },
  { id: "2", title: "What do I do?", content: "I work across editorial shoots, fashion campaigns, test shoots, and creative collaborations. My interests lean toward high fashion, avant garde concepts, monochrome aesthetics, and story led visuals." },
  { id: "3", title: "My approach", content: "Modeling, for me, is about presence and intent. I focus on body language, emotion, and narrative adapting to the photographer’s vision while bringing my own depth and character into the frame." },
  { id: "4", title: "Experience", content: "I’m at the early stage of my modeling journey and actively working on test shoots and creative projects to gain hands on experience and refine my presence in front of the camera." },
  { id: "5", title: "What inspires me", content: "High fashion, cinema, music, architecture, and human emotion. I’m drawn to visuals that feel raw, minimal, cinematic, and slightly unsettling imagery that stays with you." },
  { id: "6", title: "Who I work with", content: "I collaborate with photographers, designers, stylists, and creatives who value intention, mood, and storytelling over surface level aesthetics." },
  { id: "7", title: "My strengths", content: "Strong camera presence, expressive range, discipline, and adaptability. I’m comfortable experimenting with fashion, editorial, beauty, and conceptual work, especially in controlled, artistic environments." },
  { id: "8", title: "Let’s collaborate", content: "If you’re a photographer, designer, or creative looking to build something meaningful and visually striking, I’m open to collaborations. Let’s create work that feels honest and memorable." },
];

export function AboutAccordion() {
  return (
    <section className="relative min-h-screen bg-black pt-0 pb-12 md:pb-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-radial-gradient(ellipse_at_top,_var(--tw-gradient-stops)) from-zinc-900/40 via-black to-black" />
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.02)_2px,transparent_2px),linear-gradient(90deg,rgba(255,255,255,0.02)_2px,transparent_2px)] bg-size:40px_40px md:bg-size:80px_80px" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 md:px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-20 pt-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-block mb-4 md:mb-6"
          >
            <Badge variant="outline" className="border-white/20 text-white px-4 md:px-6 py-2 text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.4em]">
              ABOUT ME
            </Badge>
          </motion.div>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-4xl mx-auto"
        >
          <Accordion type="single" defaultValue="1" collapsible className="w-full">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.05, duration: 0.5 }}
              >
                <AccordionItem 
                  value={item.id} 
                  className="border-b border-white/5 last:border-b"
                >
                  <AccordionTrigger className="text-left py-4 md:py-8 pl-2 md:pl-14 overflow-hidden text-white/20 duration-300 hover:no-underline cursor-pointer space-y-0 md:-space-y-6 data-[state=open]:space-y-0 data-[state=open]:text-white [&>svg]:hidden hover:text-white/40 group">
                    <div className="flex flex-1 items-center md:items-start gap-4 md:gap-6">
                      <p className="text-[10px] md:text-xs text-zinc-600 group-data-[state=open]:text-zinc-400 transition-colors">
                        {item.id.padStart(2, '0')}
                      </p>
                      <h3 className="uppercase relative text-left text-xl sm:text-2xl md:text-4xl lg:text-5xl font-light tracking-tight">
                        {item.title}
                      </h3>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="text-zinc-400 text-sm md:text-lg leading-relaxed pb-6 md:pb-8 pl-8 md:pl-24 pr-4 md:pr-10">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}