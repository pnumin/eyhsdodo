import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, GraduationCap } from 'lucide-react';
import { chapters } from './navigation';
import { Chapter1 } from './components/Chapter1';
import { Chapter2 } from './components/Chapter2';
import { Chapter3 } from './components/Chapter3';
import { Chapter4 } from './components/Chapter4';

function Sidebar({ activeChapter, onNavigate }: { activeChapter: string, onNavigate: (id: string) => void }) {
  return (
    <nav className="flex flex-col gap-2 p-6 h-full border-r border-slate-200 bg-white hidden lg:flex sticky top-0 h-screen overflow-y-auto w-80 shrink-0">
      <div className="mb-8">
        <h1 className="text-lg font-extrabold text-slate-900 tracking-tight leading-tight flex items-center gap-2">
          <GraduationCap className="text-indigo-600" size={24} />
          독도 영토 주권 교육<br/>종합 교재
        </h1>
      </div>
      
      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-2">차례</div>
      
      {chapters.map((ch) => {
        const Icon = ch.icon;
        const isActive = activeChapter === ch.id;
        
        return (
          <button
            key={ch.id}
            onClick={() => onNavigate(ch.id)}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
              isActive 
                ? 'bg-indigo-50/50 border border-indigo-100 text-indigo-700 font-bold shadow-sm' 
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900 border border-transparent'
            }`}
          >
            <Icon size={18} className={isActive ? "text-indigo-600" : "text-slate-400"} />
            <span className="flex-1 text-sm leading-snug">{ch.title}</span>
            {isActive && <ChevronRight size={16} className="text-slate-300" />}
          </button>
        );
      })}
    </nav>
  );
}

function MobileMenu({ activeChapter, onNavigate }: { activeChapter: string, onNavigate: (id: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-slate-200 px-4 flex items-center justify-between z-50">
        <div className="flex items-center gap-2">
          <GraduationCap className="text-indigo-600" size={24} />
          <h1 className="font-extrabold text-slate-900 tracking-tight text-sm truncate max-w-[200px]">독도 영토 주권 교육 종합 교재</h1>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 -mr-2 text-slate-600 hover:text-slate-900">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 bg-white border-b border-slate-200 shadow-xl z-40 p-4 flex flex-col gap-2 max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
             {chapters.map((ch) => {
                const Icon = ch.icon;
                const isActive = activeChapter === ch.id;
                
                return (
                  <button
                    key={ch.id}
                    onClick={() => {
                      onNavigate(ch.id);
                      setIsOpen(false);
                    }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                      isActive 
                        ? 'bg-indigo-50 text-indigo-700 font-bold border border-indigo-100 shadow-sm' 
                        : 'text-slate-500 hover:bg-slate-50 border border-transparent'
                    }`}
                  >
                    <Icon size={18} className={isActive ? "text-indigo-600" : "text-slate-400"} />
                    <span className="flex-1 text-sm">{ch.title}</span>
                  </button>
                );
              })}
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Spacer for fixed header */}
      <div className="h-16"></div>
    </div>
  );
}

export default function App() {
  const [activeChapter, setActiveChapter] = useState('ch1');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveChapter(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    chapters.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToChapter = (id: string) => {
    setActiveChapter(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = window.innerWidth < 1024 ? 80 : 40;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col lg:flex-row selection:bg-indigo-100">
      <Sidebar activeChapter={activeChapter} onNavigate={scrollToChapter} />
      <MobileMenu activeChapter={activeChapter} onNavigate={scrollToChapter} />
      
      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-12 lg:py-20 lg:px-12 text-slate-900">
        <header className="mb-20 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            독도 영토 주권 교육<br />종합 교재
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium">
            지리적 특성, 역사적 사료 및 한일 갈등의 평화적 해결 방안
          </p>
          <div className="pt-6 text-sm text-slate-500 font-medium flex flex-col gap-1 items-center">
            <span>[중·고등용 역사 및 지리 융합 수업 보조 자료]</span>
            <strong className="text-indigo-600">대한민국 역사·지리 평화교육위원회</strong>
            <span>2026년 5월</span>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 mt-12 text-left shadow-sm">
            <h2 className="font-bold text-slate-900 mb-3 flex items-center justify-center gap-2 pb-4 border-b border-slate-100 text-lg">
              요 약
            </h2>
            <p className="text-slate-600 leading-relaxed text-[15px]">
              본 교재는 대한민국 독도의 현대·중세적 지위와 동해 해양 영토의 역사적 문맥을 체계적으로 이해하기 위해 기획되었습니다. 학생들이 감정적 해법을 넘어 명확한 역사적 고문서, 법적 조약문, 고지도의 시각적 대조 분석을 바탕으로 사실관계를 정립하고, 동아시아의 평화적 공동 해결 방안을 모색할 수 있는 비판적 사고력을 기르는 것을 목적으로 합니다.
            </p>
          </div>
        </header>

        <div className="space-y-24">
          <Chapter1 />
          <Chapter2 />
          <Chapter3 />
          <Chapter4 />
        </div>
      </main>
    </div>
  );
}
