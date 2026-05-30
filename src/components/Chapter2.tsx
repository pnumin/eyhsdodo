import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Scroll, Map as MapIcon, Ship } from 'lucide-react';

export function Chapter2() {
  return (
    <motion.section 
      id="ch2" 
      className="scroll-mt-24 mb-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center shrink-0 text-indigo-600">
          <BookOpen size={24} />
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">2. 사료와 지도로 규명하는 역사적 권원</h2>
      </div>
      
      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        역사학적 사실의 힘은 명확한 1차 사료(Primary Sources)의 교차 분석에서 나옵니다. 한·일 양국의 고문서와 고지도를 대조하여 독도의 영유권 역사를 추적합니다.
      </p>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* 2.1 한국 사료 */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3 pb-3 border-b border-slate-100">
            <Scroll className="text-indigo-600" />
            2.1 대한민국 고문서가 증명하는 독도
          </h3>
          <p className="text-slate-600 mb-6 text-sm">한국의 왕조 실록과 지리서는 일관되게 독도를 울릉도의 부속 섬이자 우리의 관할 구역으로 기록해 왔습니다.</p>
          <ul className="space-y-5 relative before:absolute before:inset-y-0 before:left-3 before:w-0.5 before:bg-slate-100">
            {[
              { year: '1454년', title: '세종실록지리지', desc: '강원도 삼척도호부 울진현 조에 "우산(于山, 독도)과 무릉(武陵, 울릉도) 두 섬이 현의 정동쪽 바다에 있다. 두 섬이 서로 거리가 멀지 않아 날씨가 맑으면 바라볼 수 있다."고 기록하여 독도의 지리적 특징(육안 관측성)을 정확히 명시했습니다.' },
              { year: '1531년', title: '신증동국여지승람', desc: '강원도 울진현 조에 우산도와 울릉도가 동해 해상에 뚜렷이 존재하는 두 개의 섬임을 지리지 및 부속 지도인 팔도총도를 통해 명문화했습니다.' },
              { year: '1808년', title: '만기요람', desc: '군정편(軍政編)에서 "여지지에 이르기를, 울릉과 우산은 모두 우산국의 땅인데, 우산은 왜인(일본인)들이 말하는 송도(松島)다"라고 명시하여 일본이 부르던 명칭과 우리의 주권 대상인 독도가 일치함을 규명했습니다.' },
              { year: '1900년 10월 25일', title: '대한제국 칙령 제41호', desc: '대한제국 고종 황제는 법령을 통해 울릉도를 \'울도군\'으로 격상하고 군수를 파견했습니다. 관할 구역으로 \'울릉전도, 죽도(울릉도 동쪽의 대나무섬), 석도(石島, \'돌섬\'의 훈독에서 유래한 독도의 당시 명칭)\'를 규정하여 일본의 무단 영토 편입 시도(1905년)보다 5년 앞서 국제법적으로 독도를 대한제국의 근대적 행정 구역에 명확히 편입시켰습니다.' }
            ].map((item, idx) => (
              <li key={idx} className="relative pl-8">
                <div className="absolute left-1.5 top-1.5 w-3.5 h-3.5 bg-white border-2 border-indigo-500 rounded-full" />
                <h4 className="font-bold text-slate-900 text-lg mb-1">{item.title} <span className="text-slate-500 text-sm font-normal">({item.year})</span></h4>
                <p className="text-slate-600 leading-relaxed text-sm bg-slate-50 p-4 rounded-xl border border-slate-100 mt-2">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* 2.2 일본 사료 */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3 pb-3 border-b border-slate-100">
            <Scroll className="text-indigo-600" />
            2.2 일본 관찬 고문서의 고백: 주권 배제 증거
          </h3>
          <p className="text-slate-600 mb-6 text-sm">일본의 고문서들은 오히려 역설적으로 독도가 일본 영토가 아님을 입증하는 가장 확실한 증거가 됩니다.</p>
          <ul className="space-y-5">
            {[
              { year: '1667년', title: '은주시청합기', desc: '일본 시마네현의 관리인 사이토 호센이 막부의 명을 받아 저술한 은도(오키섬) 시찰 보고서입니다. "오키섬을 일본의 서북쪽 한계로 삼고, 울릉도(당시 일본명 \'죽도\')와 독도(당시 일본명 \'송도\')는 고려(조선)의 영토로 본다"고 하여 일본 영토의 경계를 오키섬으로 명확히 제한했습니다.' },
              { year: '1870년', title: '조선국 교제시말 내탐서', desc: '메이지 외무성의 고위 관리들이 조선을 내탐하고 작성한 공식 보고서로, "죽도(울릉도)와 송도(독도)가 조선 영역으로 귀속된 전말"을 보고하여 메이지 정부 스스로 독도를 조선의 영역으로 인지하고 있었음을 밝히고 있습니다.' },
              { year: '1877년', title: '태정관 지령', desc: '메이지 정부 최고 행정기관인 태정관이 내무성에 하달한 공식 문서입니다. "품의한 죽도(울릉도) 외 일도(一島, 독도)의 건은 본방(일본)과 관계없음을 명심할 것"을 지시하여 독도가 일본의 영역에서 완전히 배제되어 있음을 국가 최고 결정 단위에서 명백히 시인했습니다. 지령에 첨부된 기죽도약도는 독도와 울릉도가 일본 영토가 아님을 시각적으로 명증합니다.', highlight: true }
            ].map((item, idx) => (
              <li key={idx} className={`relative p-4 rounded-xl border ${item.highlight ? 'bg-indigo-50 border-indigo-100' : 'bg-slate-50 border-slate-100'}`}>
                <h4 className="font-bold text-slate-900 mb-2">{item.title} <span className="text-slate-500 font-normal text-sm">({item.year})</span></h4>
                <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 2.3 지도 및 2.4 안용복 */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* 2.3 지도 */}
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <span className="text-indigo-600">2.3</span> 역사적 지도(Map) 대조 분석
          </h3>
          <p className="text-slate-600 mb-4 leading-relaxed">
            고지도는 당시 국가와 지리학자들이 한반도 주변의 동해 영토를 어떻게 인식했는지 보여주는 강력한 거울입니다.
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h4 className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-4 pb-3 border-b border-slate-100">
              <MapIcon className="text-indigo-600" size={18} />
              한·일 고지도의 진실 대조
            </h4>
            <div className="space-y-4">
              <div className="border-l-2 border-indigo-500 pl-4">
                <h5 className="font-bold text-slate-900 mb-1">팔도총도 (1531년) 및 동국지도 (18세기 중반)</h5>
                <p className="text-slate-600 text-sm leading-relaxed">조선왕조가 편찬한 관찬 지도로서, 동해상에 울릉도와 우산도(독도)를 뚜렷한 별개의 섬으로 그려 넣어 국가적 영토 관리 체계 하에 두고 있었음을 시각적으로 입증합니다.</p>
              </div>
              <div className="border-l-2 border-slate-300 pl-4">
                <h5 className="font-bold text-slate-900 mb-1">개정 일본여지로정전도 (1779년)</h5>
                <p className="text-slate-600 text-sm leading-relaxed">일본의 대표적인 지리학자 나가쿠보 세키스이가 제작한 대표적 관선(官選) 지도로서, 일본 영토는 채색한 반면 울릉도와 독도는 아무런 색칠을 하지 않고 투명하게 남겨두어 자국 영토 밖의 섬(조선 영토)으로 취급했음을 명확히 보여줍니다.</p>
              </div>
              <div className="border-l-2 border-slate-300 pl-4">
                <h5 className="font-bold text-slate-900 mb-1">삼국접양지도 (1785년)</h5>
                <p className="text-slate-600 text-sm leading-relaxed">일본의 저명한 실학자 하야시 시헤이가 제작한 아시아 국가 지도입니다. 각국의 영토를 색깔로 구분했는데, 조선 한반도와 독도·울릉도를 동일한 황색(Yellow)으로 칠하고 그 옆에 <strong className="text-slate-900">"조선의 것(朝鮮ノ持)"</strong>이라고 일본어로 명시하여 독도가 조선의 소유임을 고백했습니다.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2.4 안용복 */}
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <span className="text-indigo-600">2.4</span> 안용복 사건과 한·일 외교 교섭
          </h3>
          <p className="text-slate-600 mb-5 leading-relaxed">
            17세기 후반, 평범한 조선의 어부 안용복의 주도적인 외교 투쟁은 막부 정부의 공식 결정을 이끌어내는 결정 계기가 되었습니다.
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="mt-1 bg-indigo-50 text-indigo-700 p-2 rounded-lg shrink-0 h-fit">
                <Ship size={20} />
              </div>
              <div>
                <h5 className="font-bold text-slate-900">1차 도일 (1693년)</h5>
                <p className="text-slate-600 text-sm mt-1 leading-relaxed">안용복은 울릉도에서 어로 활동 중 불법 침범한 일본 돗토리번 어민들에게 납치되어 일본으로 끌려갔습니다. 현지 취조 과정에서 안용복은 기죽도(울릉도)와 송도(독도)가 조선의 영토임을 한자로 써가며 강력히 성토했습니다. 이에 에도 막부는 안용복을 돌려보내며 울릉도가 조선 영토임을 인지하게 됩니다.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1 bg-slate-50 text-slate-600 p-2 rounded-lg shrink-0 h-fit border border-slate-200">
                <Scroll size={20} />
              </div>
              <div>
                <h5 className="font-bold text-slate-900">돗토리번 답변서 (1695년)</h5>
                <p className="text-slate-600 text-sm mt-1 leading-relaxed">에도 막부가 돗토리번에 죽도(울릉도)와 송도(독도)가 번의 영토인지 질의하자, 번주가 "두 섬은 본 번의 소속이 아닙니다"라고 공식 답변했습니다.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1 bg-indigo-50 text-indigo-700 p-2 rounded-lg shrink-0 h-fit">
                <BookOpen size={20} />
              </div>
              <div>
                <h5 className="font-bold text-indigo-700">에도 막부의 도해 금지령 선포 (1696년 1월)</h5>
                <p className="text-slate-600 text-sm mt-1 leading-relaxed">막부는 일본 어민들의 울릉도·독도 방면 항해와 조업을 공식 금지하여 분쟁을 종식하고 조선의 영토 주권을 인정했습니다.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1 bg-indigo-50 text-indigo-700 p-2 rounded-lg shrink-0 h-fit">
                <Ship size={20} />
              </div>
              <div>
                <h5 className="font-bold text-slate-900">2차 도일 (1696년 5월)</h5>
                <p className="text-slate-600 text-sm mt-1 leading-relaxed">안용복은 울릉도에 다시 나타난 일본 어민들을 쫓아내고 적극적으로 호키주(돗토리현)로 건너가 '울릉자산양도감세장'이라는 기치 아래 정식 관리를 사칭하여 조선 영토를 침범한 일본 조업에 엄중히 항의하고 확답을 받아냈습니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
