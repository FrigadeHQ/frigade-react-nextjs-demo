import React from 'react';

export default function TopBanner() {
  return (
    <div className='top-0 sticky z-[110] isolate flex items-center gap-x-6 overflow-hidden bg-gradient-to-r from-brand-blue to-brand-light-blue px-6 py-2.5 sm:px-3.5 sm:before:flex-1 bg-'>
      <div className='flex flex-wrap items-center gap-x-4 gap-y-2'>
        <p className='text-sm font-medium leading-6 text-white'>
          ✨ Welcome to the Frigade Demo App. Everything you see here was built
          using the Frigade React SDK
        </p>
        <a
          href='https://cal.com/team/frigade/frigade-demo?duration=20'
          target='_blank'
          className='flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900'
        >
          Schedule demo <span aria-hidden='true'>&rarr;</span>
        </a>
      </div>
      <div className='flex flex-1 justify-end'></div>
    </div>
  );
}
