import React from 'react';
import { motion } from 'motion/react';
import { Clock, Scale, Globe, AlertCircle } from 'lucide-react';

export function Chapter3() {
  return (
    <motion.section 
      id="ch3" 
      className="scroll-mt-24 mb-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0 text-blue-600">
          <Clock size={24} />
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">3. 현대 독도 갈등의 전개와 평화적 상생 방안</h2>
      </div>
      
      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        현대 독도 갈등의 역사는 전후 영토 처리 조약의 공백과 배타적 경제수역(EEZ) 체제 도입이라는 복합적인 요인이 얽혀 있습니다.
      </p>

      <div className="space-y-12">
        {/* 3.1 샌프란시스코 조약 */}
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-2">
            <span className="text-blue-600">3.1</span> 전후 영토 처리와 샌프란시스코 강화조약의 공백
          </h3>
          <p className="text-slate-600 mb-4">제2차 세계대전의 종전과 함께 한반도의 영토는 복원되는 과정을 거쳤습니다.</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
              <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-3">
                <AlertCircle size={18} className="text-blue-600" />
                연합국최고사령관 지령 (SCAPIN) 제677호 (1946년 1월 29일)
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">일본의 항복문서 집행을 위해 연합국 사령부가 일본의 영토 및 주권 행사 범위를 규정했습니다. 이때 <strong className="text-slate-900">"울릉도, 제주도, 그리고 독도(Liancourt Rocks)"를 일본 영역에서 명확히 배제</strong>하여 한국 영토로 규정하고 한국에 반환했습니다.</p>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
              <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-3">
                <Globe size={18} className="text-indigo-600" />
                샌프란시스코 강화조약 (1951년 9월 8일 체결)
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">제2차 세계대전을 종결하는 연합국과 일본 간의 평화조약입니다. 1차부터 수차례에 걸친 조약 초안에는 일본이 포기해야 할 영토에 독도가 명시되어 있었습니다. 그러나 일본 정부의 치열한 대미 외교 로비 공작으로 인해, 최종 조약문 제2조 (a)항에는 "일본은 한국의 독립을 인정하고 제주도, 거문도, 울릉도를 포함한 한국에 대한 모든 권리를 포기한다"라고 대표적인 섬만 명기되고 <strong className="text-rose-600">'독도'라는 명칭이 조약문에서 누락</strong>되었습니다. 일본은 이 명문상의 누락을 빌미로 오늘날까지 독도를 분쟁 지역화하는 왜곡 주장을 펼치고 있습니다.</p>
            </div>
          </div>
        </div>

        {/* 3.2 주권 수호 */}
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-2">
            <span className="text-blue-600">3.2</span> 평화선 선포와 주권 수호의 노력
          </h3>
          <p className="text-slate-600 mb-6">조약 체결 이후 해양 주권 침탈이 우려되자 대한민국 정부는 단호하게 영토 방어 체계를 구축했습니다.</p>
          
          <div className="relative border-l-2 border-slate-200 ml-3 pl-6 space-y-8">
            <div className="relative">
              <div className="absolute -left-[35px] bg-white border-2 border-blue-500 rounded-full w-5 h-5 top-1"></div>
              <h4 className="font-bold text-slate-900 mb-1 text-lg">이승만 평화선 선포 <span className="text-slate-500 font-normal text-base">(1952년 1월)</span></h4>
              <p className="text-slate-600 leading-relaxed">샌프란시스코 조약 발효 직전, 이승만 대통령은 '인접해양 주권선포'를 통해 동해 해상에 대한민국 평화선(Rhee Line)을 설정했습니다. 평화선 내에 독도를 포함하여 대한민국의 확고한 해양 주권을 선포하고 침범하는 일본 어선들을 나포 및 압수 처분했습니다.</p>
            </div>
            
            <div className="relative">
              <div className="absolute -left-[35px] bg-white border-2 border-blue-500 rounded-full w-5 h-5 top-1"></div>
              <h4 className="font-bold text-slate-900 mb-1 text-lg">독도의용수비대의 결성 <span className="text-slate-500 font-normal text-base">(1953~1956년)</span></h4>
              <p className="text-slate-600 leading-relaxed">한국전쟁의 혼란기를 틈타 일본 순시선과 무단 조업선이 독도에 상륙하여 푯말을 박는 등 침탈 조짐을 보이자, 홍순칠을 비롯한 울릉도 청년 전역 군인들이 자발적으로 <strong className="text-slate-900">독도의용수비대</strong>를 결성했습니다. 이들은 박격포 나무 모형을 만들어 설치하는 등 열악한 환경 속에서 무력 침탈을 실력으로 격퇴하며 독도를 온몸으로 지켜냈습니다.</p>
            </div>

            <div className="relative">
              <div className="absolute -left-[35px] bg-white border-2 border-blue-500 rounded-full w-5 h-5 top-1"></div>
              <h4 className="font-bold text-slate-900 mb-1 text-lg">한일 국교정상화와 독도 문제 <span className="text-slate-500 font-normal text-base">(1965년)</span></h4>
              <p className="text-slate-600 leading-relaxed">한일기본조약 체결 시 독도 영유권 문제를 직접 문서화하지 않고, "장래에 해결해야 할 과제"로 묵인하는 이른바 '독도 밀약'을 통해 갈등을 수면 아래로 가라앉히고 양국의 실질적 소강상태를 유지했습니다.</p>
            </div>
          </div>
        </div>

        {/* 3.3 신한일어업협정 */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm overflow-hidden relative">
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <Scale size={100} />
          </div>
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-blue-600">3.3</span> 신한일어업협정(1998년)과 갈등의 재점화
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              1994년 유엔해양법협약(UNCLOS)이 공식 발효되면서 세계 해양 질서는 배타적 경제수역(EEZ) 체제로 전면 재편되었습니다.
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="mt-1 bg-indigo-50 text-indigo-700 p-1.5 rounded text-xs font-bold shrink-0">배경</div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">중간수역 설정</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">한국과 일본은 영해 바깥쪽 200해리 배타적 경제수역이 서로 겹치게 되었습니다. 양국은 울릉도와 오키섬을 기점으로 수역을 설정했고, 합의가 도출되지 않는 중첩 구역을 <strong className="text-indigo-600">'중간수역'</strong>으로 설정하는 <strong className="text-slate-900">신한일어업협정(1998년 9월)</strong>을 체결했습니다.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="mt-1 bg-rose-50 text-rose-700 p-1.5 rounded text-xs font-bold shrink-0">결과</div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">갈등의 폭발</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">독도가 영토 기점이 아닌 중간수역 내에 위치하게 되자 국내적으로 영유권 훼손 우려가 제기되었습니다. 한편 일본 측에서는 조업량 감소로 불만이 가득 찬 시마네현 어민들의 요구를 정치적으로 이용하여, 2005년 시마네현 조례로 <strong className="text-rose-600">'다케시마의 날(2월 22일)'</strong>을 강행 제정하였습니다. 이후 일본 정부는 초·중·고 교과서 학습지도요령을 개정해 일반 왜곡 교과서에까지 "한국이 독도를 불법 점거하고 있다"는 왜곡된 내용을 기술하여 양국 미래 세대 간의 역사 갈등을 극대화하고 있습니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
