import { useState } from 'react';
import { JobApplicationModal } from './components/job-application-modal';

export function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }


  return ( 
    <div className=' flex bg-zinc-600 h-dvh items-center justify-center'>
      <button
      onClick={handleOpenModal}
      className='bg-pinkJoinrs text-sm cursor-pointer w-24 h-10 rounded-lg '
      >
        abrir modal
      </button>
      {isModalOpen && <JobApplicationModal onClose={handleCloseModal} />}
    </div>
  )
}


