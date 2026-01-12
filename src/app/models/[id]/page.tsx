import Navbar from '@/components/Navbar';
import { models } from '@/lib/data';
import { Instagram, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function ModelDetail({ params }: { params: { id: string } }) {
  const model = models.find((m) => m.id === Number(params.id));

  if (!model) return notFound();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
        
        <Link href="/models" className="inline-flex items-center text-sm uppercase tracking-widest mb-8 hover:text-gray-500 transition">
          <ArrowLeft size={16} className="mr-2" /> Back to Board
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Main Image */}
          <div className="h-[80vh] bg-gray-100">
             <img src={model.image} alt={model.name} className="w-full h-full object-cover" />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            <h1 className="text-6xl font-bold uppercase tracking-tighter mb-2">{model.name}</h1>
            <p className="text-xl text-gray-500 uppercase tracking-widest mb-8">{model.category}</p>

            <div className="grid grid-cols-2 gap-8 border-t border-b border-gray-100 py-8 mb-8">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Height</p>
                <p className="font-mono text-lg">{model.height}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Bust</p>
                <p className="font-mono text-lg">{model.stats.bust}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Waist</p>
                <p className="font-mono text-lg">{model.stats.waist}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Hips</p>
                <p className="font-mono text-lg">{model.stats.hips}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 bg-black text-white py-4 uppercase tracking-widest hover:bg-gray-800 transition">
                Book {model.name}
              </button>
              <button className="px-6 py-4 border border-gray-200 hover:border-black transition">
                <Instagram size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}