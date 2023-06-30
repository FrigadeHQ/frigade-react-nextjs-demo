import React from 'react';
import { resetAllIds } from '../utils/users';

export default function DemoCTAs() {
  return (
    <div className='flex'>
      <button
        className='bg-white px-2 whitespace-nowrap w-auto border border-blue-700 rounded-md flex items-center justify-center h-8  text-blue-900 text-xs'
        onClick={() => {
          resetAllIds();
        }}
      >
        Reset
      </button>
      <a
        className='bg-white px-2 whitespace-nowrap w-auto border border-blue-700 rounded-md flex items-center justify-center h-8 ml-2  text-blue-900 text-xs'
        href='https://github.com/FrigadeHQ/frigade-react-nextjs-demo'
        target='_blank'
      >
        Source code
      </a>
      <a
        className='bg-blue-50 px-2  whitespace-nowrap text-center w-auto border border-blue-700 rounded-md flex items-center justify-center h-8 text-blue-900 text-xs ml-2'
        href='https://frigade.com'
        target='_blank'
      >
        Website
      </a>
    </div>
  );
}
