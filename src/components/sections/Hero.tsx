import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
      <Image 
        src="/Rishabh/hero_ultrawide_21_9.jpg" 
        alt="Rishabh Manwatkar Portfolio" 
        fill
        priority
        className="object-cover object-center opacity-80 grayscale hover:grayscale-0 transition-all duration-1000"
        sizes="100vw"
        quality={100}
      />
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      
      {/* Content Container */}
      {/* Fixed: Adjusted padding for mobile (p-6) and ensured it takes full height */}
      <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-12 lg:p-16">
        
        {/* Top Left - Name & Title */}
        {/* Fixed: Scaled down text size for mobile (text-4xl) to prevent clipping */}
        <div className="space-y-2 pt-12 md:pt-0">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-none">
            RISHABH
            <br />
            <span className="font-light italic">MANWATKAR</span>
          </h1>
          <p className="text-[10px] sm:text-sm md:text-base lg:text-lg text-white/80 tracking-[0.2em] md:tracking-[0.3em] uppercase font-light">
            High Fashion & Editorial
          </p>
        </div>

        {/* Bottom Right - Tagline & CTA */}
        {/* Fixed: Balanced spacing and button width for touch targets on mobile */}
        <div className="self-end text-right space-y-4 md:space-y-6 pb-8 md:pb-0 w-full sm:w-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white tracking-wider uppercase font-light leading-snug">
            A New Standard
            <br />
            Of Beauty
          </h2>
          <button className="border border-white px-6 py-3 md:px-8 text-white text-[12px] md:text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300">
            View Portfolio
          </button>
        </div>

      </div>
    </section>
  );
}