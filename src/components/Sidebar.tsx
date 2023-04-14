import React from 'react';
import { resetAllIds } from '../utils/users';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Sidebar() {
  return (
    <div className='h-full inset-y-0 flex w-64 flex-col'>
      <nav aria-label='Sidebar'>
        <div className='p-8'>
          <button
            className='flex items-center justify-center h-8 w-24 bg-gray-medium rounded-full text-black text-xs'
            onClick={() => {
              resetAllIds();
              window.location.reload();
            }}
          >
            Reset demo
          </button>
        </div>
      </nav>
    </div>
  );
}
