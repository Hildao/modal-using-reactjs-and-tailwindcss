import { useState } from 'react';
import Modal from '../features/modal';
import './styles.css';

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className='container mx-auto mt-8 w-1/2'>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className='border-4 border-blue-400 rounded py-3 px-8 mb-4 text-xl font-bold bg-purple-400 hover:bg-white hover:text-purple-500'
      >
        Click me
      </button>

      {/* Conditional rendering to say - if button open show modal and also click to close */}
      {open && <Modal setOpen={setOpen} />}
    </div>
  );
}
