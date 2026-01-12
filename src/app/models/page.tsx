import Navbar from '@/components/Navbar';
import { models } from '@/lib/data';
import Link from 'next/link';

export default function ModelsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-24 px-4 max-w-[1600px] mx-auto">
        <h1 className="text-4xl font-bold uppercase tracking-tighter mb-12">Our Talent</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12">
          {models.map((model) => (
            <Link href={`/models/${model.id}`} key={model.id} className="group block">
              <div className="relative aspect-3/4 overflow-hidden bg-gray-100 mb-4">
                <img 
                  src={model.image} 
                  alt={model.name} 
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105" 
                />
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-xl font-bold uppercase">{model.name}</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">{model.category}</p>
                </div>
                <span className="text-sm font-mono text-gray-400">{model.height}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}