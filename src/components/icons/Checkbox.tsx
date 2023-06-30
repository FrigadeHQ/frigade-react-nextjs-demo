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
          stroke={!current ? '#C5CBD3' : 'currentColor'}
        ></circle>
        <path
          stroke={!current ? '#C5CBD3' : 'currentColor'}
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
      <circle cx='12' cy='12' r='12' fill='currentColor'></circle>
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
