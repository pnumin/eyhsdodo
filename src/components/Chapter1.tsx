import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Eye, BookOpen, Scroll, Map as MapIcon, Ship, Scale, Globe, FileSignature } from 'lucide-react';

export function Chapter1() {
  return (
    <motion.section 
      id="ch1" 
      className="scroll-mt-24 mb-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center shrink-0 text-indigo-600">
          <MapPin size={24} />
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">1. 독도의 지리적 특성과 영역의 이해</h2>
      </div>
      
      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        독도가 대한민국의 영토임을 이해하는 첫걸음은 명확한 물리적·지리적 사실과 국제법적 영역 개념을 정확히 확립하는 것입니다.
      </p>

      {/* 1.1 위치와 거리 */}
      <div className="mb-12">
        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <span className="text-indigo-600">1.1</span> 지리적 위치와 물리적 거리 분석
        </h3>
        <p className="text-slate-700 mb-4 leading-relaxed">
          독도는 동해상에 홀로 떠 있는 외로운 섬이 아니라, 울릉도와 자연적으로 유기적으로 연결된 우리 영토의 동쪽 끝입니다.
        </p>
        <ul className="space-y-3 mb-6 text-slate-700 ml-4 border-l-2 border-slate-200 pl-4">
          <li><strong className="text-slate-900">위도 및 경도 (동도 우산봉 기준):</strong> 북위 37°14'26.8", 동경 131°52'10.4"</li>
          <li><strong className="text-slate-900">구성과 면적:</strong> 총면적 187,554 m²에 달하며 동도(73,297 m²), 서도(88,740 m²), 그리고 주변의 89개의 부속 바위섬으로 구성되어 있습니다. 이는 서울 잠실종합운동장의 약 2배 크기입니다.</li>
          <li>
            <strong className="text-slate-900">인접 도서 및 영토와의 거리:</strong>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-slate-600">
              <li><strong className="text-indigo-600">울릉도 - 독도: 87.4 km (가장 가까운 거리)</strong></li>
              <li>한반도 죽변(울진) - 독도: 216.8 km</li>
              <li>일본 오키섬 - 독도: 157.5 km</li>
            </ul>
          </li>
        </ul>

        {/* 관측성 박스 */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 mt-6 shadow-sm">
          <h4 className="flex items-center gap-2 font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100">
            <Eye className="text-indigo-600" size={20} />
            지리적 육안 관측성의 역사적 의의
          </h4>
          <p className="text-slate-600 mb-4">지리학과 역사학에서 <strong className="text-slate-800">육안 관측 가능 여부</strong>는 영토적 자각의 시작을 규정하는 핵심 요소입니다.</p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 shrink-0 bg-indigo-100 text-indigo-700 rounded-lg flex items-center justify-center font-bold">1</div>
              <p className="text-slate-600 leading-relaxed">
                <strong className="text-slate-800">울릉도에서의 독도 관측:</strong> 울릉도의 사동, 석포마을 등 고지대에서는 맑은 날 독도가 육안으로 또렷이 관측됩니다. 이는 아주 먼 옛날부터 울릉도에 살던 사람들이 동쪽 바다 끝에 상존하는 섬(독도)의 존재를 자연스럽게 인지하고 생활권의 일부로 편입시켰음을 증명합니다.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 shrink-0 bg-slate-100 text-slate-700 rounded-lg flex items-center justify-center font-bold">2</div>
              <p className="text-slate-600 leading-relaxed">
                <strong className="text-slate-800">일본 오키섬에서의 관측 불가능성:</strong> 일본에서 독도와 가장 가까운 오키섬에서는 지구 곡률과 거리 한계(157.5 km) 때문에 날씨가 아무리 맑아도 독도를 결코 볼 수 없습니다. 따라서 일본 에도 시대의 어민들은 의도적인 원거리 도해(항해)를 통해서만 독도를 찾아갈 수 있었으며, 이는 자연적 영토 인지의 범위 밖이었음을 입증합니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 1.2 국가 영역 */}
      <div className="mb-12">
        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <span className="text-indigo-600">1.2</span> 국가 영역(Territory)의 삼요소와 독도
        </h3>
        <p className="text-slate-700 mb-6 leading-relaxed">
          국가 영역은 영토, 영해, 영공으로 구성되며 대한민국은 독도를 기점으로 주권을 명확히 행사하고 있습니다.
        </p>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-900">
                <th className="p-4 font-bold w-1/4">영역 구분</th>
                <th className="p-4 font-bold">핵심 개념 및 독도의 지위</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="p-4 font-semibold whitespace-nowrap text-indigo-900">영토 (Territory)</td>
                <td className="p-4 leading-relaxed">주권이 미치는 지표의 범위로, 독도는 경상북도 울릉군 울릉읍 독도리 1~96번지에 해당하는 엄연한 대한민국의 행정 영토입니다.</td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="p-4 font-semibold whitespace-nowrap text-indigo-900">영해 (Territorial Sea)</td>
                <td className="p-4 leading-relaxed">영토에 인접한 해역으로 기선으로부터 12해리(1해리 = 1,852 m)까지 지정됩니다. 대한민국은 독도 주변 12해리를 완전한 주권 해역으로 선포하고 일본 어선의 불법 침입을 단속해 왔습니다.</td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="p-4 font-semibold whitespace-nowrap text-indigo-900">영공 (Airspace)</td>
                <td className="p-4 leading-relaxed">영토와 영해의 수직 상공(대기권 범위)을 의미하며, 독도 상공은 대한민국 공군의 방공식별구역(KADIZ)에 명확히 포함됩니다.</td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="p-4 font-semibold whitespace-nowrap text-indigo-900">배타적 경제수역 (EEZ)</td>
                <td className="p-4 leading-relaxed">영해 기선으로부터 최대 200해리까지의 수역 중 영해를 제외한 수역입니다. 연안국에 천연자원의 탐사·개발·보존 및 관리 권한이 부여되는 경제적 권리 수역입니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 1.3 주소 */}
      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <span className="text-indigo-600">1.3</span> 독도의 주소와 도로명 체계
        </h3>
        <p className="text-slate-600 mb-4 leading-relaxed">
          독도는 상주하는 주민과 독도경비대원이 살고 있는 유인도(有人島)이며 고유의 도로명을 부여받았습니다.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:border-indigo-300 transition-colors">
            <h4 className="font-bold text-slate-900 mb-2 truncate">동도 <span className="text-sm font-normal text-slate-500">(독도경비대, 독도등대 등)</span></h4>
            <p className="text-indigo-700 font-medium">경상북도 울릉군 울릉읍 독도리 이사부길</p>
          </div>
          <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:border-indigo-300 transition-colors">
            <h4 className="font-bold text-slate-900 mb-2 truncate">서도 <span className="text-sm font-normal text-slate-500">(주민숙소, 응용수원인 '물골' 위치)</span></h4>
            <p className="text-indigo-700 font-medium">경상북도 울릉군 울릉읍 독도리 안용복길</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
