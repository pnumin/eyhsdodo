import React from 'react';
import { motion } from 'motion/react';
import { Edit3, Users, MessageSquare, PencilLine } from 'lucide-react';

export function Chapter4() {
  return (
    <motion.section 
      id="ch4" 
      className="scroll-mt-24 mb-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0 text-emerald-600">
          <Edit3 size={24} />
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">[수업 활동지] 한·일 평화 공동 교과서 집필하기</h2>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
        <div className="mb-8 bg-emerald-50 text-emerald-900 p-5 rounded-xl border border-emerald-100">
          <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
            <Users size={20} />
            학습 목표 및 안내
          </h3>
          <p className="mb-4 leading-relaxed bg-white/60 p-3 rounded-lg text-sm">
            <strong>활동 취지:</strong> 한일 양국의 왜곡된 영토주의적 감정 대립을 극복하고, 양국의 중학생들이 공동으로 역사를 수업한다고 가정했을 때 함께 배울 수 있는 객관적이고 평화지향적인 공동 역사 교과서를 집필해 봅니다.
          </p>
          <ul className="list-disc ml-5 space-y-2 text-sm">
            <li><strong>작성 조건:</strong> 앞서 배운 한·일 고문서 사료(태정관 지령, 세종실록지리지 등) 중 최소 2개 이상을 역사적 근거로 제시할 것.</li>
            <li><strong>서술 방향:</strong> 일방적인 비난이나 감정적 표현을 배제하고, 사실(Fact) 중심의 서술과 미래지향적 평화 공동체 관점을 유지할 것.</li>
            <li><strong>분량:</strong> 10줄 이내로 서술형 문장을 작성할 것.</li>
          </ul>
        </div>

        {/* 4.1 활동 예시 양식 */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <span className="text-emerald-600">4.1</span> 1. 공동 교과서 집필 활동 예시 양식
          </h3>
          
          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm bg-slate-50">
            <div className="bg-slate-900 text-white p-4 font-bold flex items-center gap-2">
              <PencilLine size={18} />
              한·일 학생 공동 역사 교과서 - 독도 서술 제안서
            </div>
            <div className="p-6 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="font-bold text-slate-900">■ 모둠원 이름:</span>
                <div className="flex-1 border-b border-slate-400 border-dashed pb-1 px-2 flex justify-around text-slate-500 text-sm">
                  <span>(한국 학생)</span> / <span>(일본 학생)</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="font-bold text-slate-900 shrink-0">■ 우리가 제안하는 독도 단원 제목:</span>
                <div className="flex-1 border-b border-slate-400 border-dashed pb-1 w-full h-6"></div>
              </div>

              <div>
                <span className="font-bold text-slate-900 block mb-2">■ 공동 집필 본문 (10줄 이내):</span>
                <div className="bg-white border border-slate-300 rounded-lg p-5 min-h-[200px] text-slate-600 text-sm leading-loose shadow-sm italic">
                  (예시 서술) 동해의 평화로운 섬 독도는 역사적 사료를 통해 그 지위가 증명된다. 한국의 『세종실록지리지(1454년)』에는 울릉도와 독도(우산)가 서로 거리가 멀지 않아 날씨가 맑으면 육안으로 관측 가능하다고 기록되어 양국의 고대 생활권과 인식을 보여준다. 또한, 일본 메이지 정부 최고 기관이 내린 『태정관 지령(1877년)』에서도 울릉도와 독도가 일본과 관계없는 조선의 영역임을 분명히 명시했다. 러일전쟁 중 일본에 의해 불법 편입되는 아픔을 겪기도 했으나, 2차 대전 후 연합국의 조치를 통해 한국의 관할로 환원되었다. 오늘날 양국은 배타적 경제수역(EEZ) 설정 과정에서 어업 갈등을 겪고 있으나, 영토 대립을 넘어 역사적 진실을 직시하고 동해를 평화와 공동 번영의 바다로 만들기 위해 상호 협력해야 한다.
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 justify-end mt-8">
                <span className="font-bold text-slate-900">평가위원 의견 및 서명:</span>
                <div className="w-64 border-b border-slate-400 border-dashed"></div>
              </div>
            </div>
          </div>
        </div>

        {/* 4.2 토론 및 성찰 */}
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2 border-t border-slate-200 pt-8">
            <span className="text-emerald-600">4.2</span> 2. 토론 및 성찰 질문 리스트
          </h3>
          <p className="text-slate-600 mb-6 text-sm">
            수업 마무리 단계에서 모둠별 혹은 개별 성찰을 위해 활용할 수 있는 질문입니다.
          </p>
          
          <div className="space-y-4">
            {[
              '일본의 1877년 『태정관 지령』과 첨부된 『기죽도약도』가 현대 일본 정부의 "에도시대부터 독도를 자국 영토로 인지했다"는 주장을 반박하는 가장 결정적인 카드인 이유는 무엇인지 토론해 봅시다.',
              '1998년 체결된 \'신한일어업협정\'에서 왜 독도가 한국의 독자적 EEZ 기점이 되지 못하고 중간수역에 놓이게 되었는지, 당시의 타협 배경과 어업권 보호 측면에서 평가해 봅시다.',
              '미래 세대인 우리가 독도 갈등을 평화적으로 해결하기 위해, 한일 청소년 역사 캠프나 역사 학술 교류 활성화가 필요한 이유에 대해 본인의 생각을 정리해 봅시다.'
            ].map((question, i) => (
              <div key={i} className="flex gap-4 bg-white rounded-xl p-4 border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-default">
                <div className="bg-emerald-100 text-emerald-600 w-8 h-8 rounded-lg flex items-center justify-center font-bold shrink-0">
                  {i + 1}
                </div>
                <p className="text-slate-600 leading-relaxed text-sm pt-1">
                  {question}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
