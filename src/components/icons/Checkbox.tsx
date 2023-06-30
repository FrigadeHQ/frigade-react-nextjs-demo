import React from 'react';

function Checkbox({
  checked,
  current,
}: {
  checked: boolean;
  current: boolean;
}) {
  if (!checked) {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        fill='none'
        viewBox='0 0 24 24'
      >
        <circle
          cx='12'
          cy='12'
          r='11.5'
          fill='#F4F8F9'
          stroke={!current ? 'currentColor' : '#626262'}
        ></circle>
        <path
          stroke={!current ? 'currentColor' : '#626262'}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='1.5'
          d='M8 12.348L10.462 15l-.016-.017L16 9'
        ></path>
      </svg>
    );
  }

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
    >
      <circle cx='12' cy='12' r='12' fill='#0171F8'></circle>
      <path
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M8 12.348L10.462 15l-.016-.017L16 9'
      ></path>
    </svg>
  );
}

export default Checkbox;
