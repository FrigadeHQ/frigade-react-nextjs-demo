import React from 'react';
import { classNames } from '../utils/classes';

export default function Placeholder({
  className = '',
}: {
  className?: string;
}) {
  return (
    <div
      className={classNames(
        'flex items-center justify-center bg-gray-medium rounded-full',
        className
      )}
    ></div>
  );
}
