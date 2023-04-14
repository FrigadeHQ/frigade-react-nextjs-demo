// Create a placeholder component with tailwind. Essentially this is just a gray pill with no text.

import React from 'react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Placeholder({
  className = '',
}: {
  className?: string;
}) {
  return (
    <div
      className={classNames(
        'flex items-center justify-center h-8 w-24 bg-gray-medium rounded-full',
        className
      )}
    ></div>
  );
}
