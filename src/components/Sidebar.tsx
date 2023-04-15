import React from 'react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Sidebar() {
  return (
    <div className='h-full inset-y-0 flex w-64 flex-col'>
      <nav aria-label='Sidebar'></nav>
    </div>
  );
}
