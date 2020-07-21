import React, { useState } from 'react';

import { useEventListener } from '../../hooks';

export function CheckBox() {
  const [isChecked, setChecked] = useState(false);

  const isBrowser = typeof window !== 'undefined';

  function handleKeydown(e) {
    if (e.keyCode === 32) {
      e.preventDefault();
      setChecked(!isChecked);
    }
  }

  useEventListener('keydown', handleKeydown, {
    target: isBrowser ? document : null,
  });

  return (
    <div className="flex-shrink-0">
      <span
        role="checkbox"
        tabIndex="0"
        onClick={() => setChecked(!isChecked)}
        onKeyDown={(e) => handleKeydown(e)}
        aria-checked={isChecked}
        className={`${
          isChecked ? 'bg-gray-800' : 'bg-gray-200'
        } relative flex-shrink-0 inline-block h-6 transition duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:shadow-outline-gray`}
      >
        <span
          aria-hidden="true"
          className={`${
            isChecked ? 'translate-x-0' : 'translate-x-5'
          } inline-block w-5 h-5 transition duration-200 ease-in-out transform bg-white rounded-full shadow`}
        />
      </span>
    </div>
  );
}
