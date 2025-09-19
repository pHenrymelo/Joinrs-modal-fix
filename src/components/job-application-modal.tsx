import { CheckCircle2, ChevronLeft, Circle, X } from "lucide-react";

import { useState } from "react";
import eyes from '../assets/eyes.png';

interface JobApplicationModalProps {
  onClose: () => void
}

export function JobApplicationModal({onClose}: JobApplicationModalProps) {

  const [selectedModality, setSelectedModality] = useState('Remoto');
  const [selectedLocation, setSelectedLocation] = useState('São Paulo');

  return (
    <div
    onClick={onClose}
    className="fixed inset-0 bg-zinc-900/50 flex items-center justify-center"
    >

    <div 
    onClick={(e) => e.stopPropagation()} 
    className=" flex flex-col gap-4 bg-pinkJoinrs text-white rounded-2xl px-4 md:px-8 py-6 w-5/6 md:w-2/3 xl:w-1/2 h-3/4 mx-auto my-auto"
    >
      <div className=" flex justify-between mb-6">
        <ChevronLeft className="cursor-pointer w-6 h-6 md:w-8 md:h-8" size={32} onClick={onClose}/>
        <span className=" font-bold text-md md:text-lg lg:text-xl mx-auto max-w-5/6">Candidate-se em Joinrs Brasil</span>
        <X className="cursor-pointer  w-6 h-6 md:w-8 md:h-8" onClick={onClose}/>
      </div>
      <div className="flex justify-between items-center">
        <img src={eyes} alt="eyes open" width={90}/>
        <div className=" relative w-14 h-14">
          <Circle size={48} className="absolute inset-0 m-auto"/>
          <span className=" absolute inset-0 flex items-center justify-center text-xs font-semibold text-white">100%</span>
        </div>
      </div>
      <span className=" flex text-white text-lg md:text-2xl font-bold">Defina o local de trabalho</span>
      <div className=" flex flex-col gap-2">
        <span>Esta oferta de emprego envolve a seguinte modalidade:</span>
        <button 
          className="flex justify-between items-center bg-white rounded-lg px-4 py-1 text-black font-bold mt-auto cursor-pointer mx-1 text-sm"
          onClick={() => setSelectedModality('Remoto')}
          >
          Remoto
          {selectedModality === 'Remoto' && <CheckCircle2 color="white" fill="#D2A5E0" />}
        </button>
      </div>
      <div className=" flex flex-col gap-2">
        <span>Selecione o local de trabalho de sua preferencia:</span>
        <div className=" flex">
          <button 
          className="min-h-8 flex justify-center items-center bg-white rounded-lg px-4 py-1 text-black font-bold mt-auto cursor-pointer mx-1 text-xs"
          onClick={() => setSelectedLocation('Rio de Janeiro')}
          >
            Rio de Janeiro
            {selectedLocation === 'Rio de Janeiro' && <CheckCircle2 color="white" fill="#D2A5E0" />}
          </button>
          <button 
            className="min-h-8 flex justify-center items-center bg-white rounded-lg px-4 py-1 text-black font-bold mt-auto cursor-pointer mx-1 text-xs"
            onClick={() => setSelectedLocation('São Paulo')}
            >
            São Paulo
            {selectedLocation === 'São Paulo' && <CheckCircle2 color="white" fill="#D2A5E0" />}
          </button>
        </div>
      </div>
      <button className="flex items-center justify-center bg-white rounded-lg p-2 text-black mt-auto cursor-pointer">
        Candidate-se
      </button>
    </div>
  </div>
  )
}