import React, { memo } from 'react';

function WarningIcon() {
  return (
    <svg
      className="warning-img"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 58 52"
    >
      <g clipPath="url(#a)">
        <path
          fill="#B12626"
          d="M57.347 44.689C59.206 47.939 56.873 52 53.16 52H4.838C1.12 52-1.203 47.932.652 44.69l24.16-42.253c1.86-3.25 6.518-3.245 8.374 0l24.161 42.253zM29 35.953c-2.558 0-4.632 2.092-4.632 4.672s2.074 4.672 4.632 4.672 4.632-2.092 4.632-4.672-2.074-4.672-4.632-4.672zM24.602 19.16l.747 13.812a1.213 1.213 0 001.207 1.153h4.888c.642 0 1.172-.506 1.207-1.153l.747-13.812a1.214 1.214 0 00-1.207-1.285H25.81c-.693 0-1.244.587-1.207 1.285z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0H58V52H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default memo(WarningIcon);
