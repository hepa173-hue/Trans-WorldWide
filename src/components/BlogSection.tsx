import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/servicesData';
import { BlogPost } from '../types';
import { ArrowUpRight, X, Clock, Calendar } from 'lucide-react';

interface BlogSectionProps {
  isLightMode?: boolean;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ isLightMode = false }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className={`py-24 relative transition-colors duration-300 ${isLightMode ? 'bg-slate-100 text-slate-900 border-b border-slate-200' : 'bg-[#0A3D62] text-white border-b border-slate-800'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-cyan-300 uppercase mb-3">
              <span>Coneixement & Recerca</span>
              <span aria-hidden="true">·</span>
              <span>Blog Corporatiu</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
              Innovació en moviment
            </h2>
            <p className={`mt-4 text-base sm:text-lg ${isLightMode ? 'text-slate-600' : 'text-slate-200'}`}>
              Anàlisis sobre descarbonització, telemetria d’última generació i l’evolució del transport connectat.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className={`group rounded-2xl border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between cursor-pointer overflow-hidden ${
                isLightMode
                  ? 'bg-white border-slate-300 hover:border-[#0A3D62] hover:shadow-slate-300'
                  : 'bg-[#06263e]/80 border-white/10 hover:border-cyan-400/80 hover:shadow-cyan-950/50'
              }`}
            >
              {/* Blog Article Image with smooth zoom hover */}
              {post.image && (
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-cyan-300 border border-white/10">
                      {post.category}
                    </span>
                  </div>
                </div>
              )}

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-[11px] text-cyan-300/90 font-medium mb-3">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className={`text-lg sm:text-xl font-bold group-hover:text-cyan-300 transition-colors leading-snug mb-3 ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
                    {post.title}
                  </h3>

                  <p className={`text-xs leading-relaxed mb-6 line-clamp-3 ${isLightMode ? 'text-slate-600' : 'text-slate-300'}`}>
                    {post.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className={`text-[11px] ${isLightMode ? 'text-slate-500' : 'text-slate-400'}`}>{post.date}</span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 group-hover:text-cyan-200 transition-colors">
                    <span>Llegir Article</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Blog Article Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#07243a] text-white rounded-xl border border-slate-700 max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Tancar modal d'article"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 text-xs text-cyan-300 mb-3">
              <span className="uppercase tracking-wider font-semibold">{selectedPost.category}</span>
              <span aria-hidden="true">·</span>
              <span>{selectedPost.readTime}</span>
              <span aria-hidden="true">·</span>
              <span>{selectedPost.date}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-tight">
              {selectedPost.title}
            </h3>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/10 pt-6">
              {selectedPost.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setSelectedPost(null)}
                className="px-5 py-2 text-xs font-semibold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white rounded-md transition-colors cursor-pointer"
              >
                Tancar Lectura
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
