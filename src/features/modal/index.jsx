import { useState } from 'react';

export default function Modal({ setOpen }) {
  const [email, setEmail] = useState('');
  const [isFocused, setisFocused] = useState(false);

  return (
    <div className='bg-gray-500 border-gray-600 rounded'>
      <div className='mx-12'>
        <div className='mb-4 py-4 flex justify-between'>
          <div>
            <h1 className='text-2xl font-bold text-pink-400'>
              Fab Fashion Magazine
            </h1>
          </div>
          <div
            onClick={() => setOpen(false)}
            className='font-bold hover:text-pink-400'
          >
            X
          </div>
        </div>
        <div className='mb-4'>
          <p className='text-justify'>
            Get our monthly magazine for the latest Fashion must have
            collections to add to your wardrobe, health and beauty
            tips to keep you looking hot all season.
          </p>
        </div>
        <div>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setisFocused(true)}
            onBlurr={() => setisFocused(false)}
            placeholder='youremail@email.com'
            className={`border-2 rounded py-2 px-4 item center w-full mb-4 ${
              isFocused ? 'border-blue-400 text-pink-400' : ''
            }`}
          />
        </div>
        <div className='mx-12'>
          <button
            disabled={!email}
            onClick={() => setOpen(false)}
            className={`w-full border-2 rounded py-2 px-6 mb-4 ${
              !email
                ? 'text-gray-800 border-gray-200 bg-gray-100'
                : 'border-blue-400 bg-purple-600 text-xl font-bold hover:bg-white hover:text-purple-500'
            }`}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
