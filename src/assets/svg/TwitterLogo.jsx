/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

const TwitterLogo = (props) => (
  <svg
    width={48}
    height={39}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M48 4.611a19.833 19.833 0 01-5.662 1.562A9.907 9.907 0 0046.673.716a19.675 19.675 0 01-6.256 2.388A9.8 9.8 0 0033.237 0c-5.439 0-9.849 4.408-9.849 9.844 0 .77.09 1.519.257 2.246-8.182-.414-15.44-4.338-20.296-10.294a9.794 9.794 0 00-1.333 4.958 9.845 9.845 0 004.38 8.198 9.938 9.938 0 01-4.465-1.23v.116c0 4.775 3.395 8.752 7.896 9.657a9.72 9.72 0 01-2.588.354 10.38 10.38 0 01-1.856-.182c1.253 3.903 4.889 6.755 9.196 6.84a19.788 19.788 0 01-12.23 4.214c-.798 0-1.578-.045-2.349-.14A27.967 27.967 0 0015.099 39c18.11 0 28.02-15.002 28.02-28.018 0-.427-.014-.851-.034-1.271A19.46 19.46 0 0048 4.611z"
      fill="url(#prefix__paint0_linear)"
    />
    <defs>
      <linearGradient
        id="prefix__paint0_linear"
        x1={7.332}
        y1={1.505}
        x2={42.267}
        y2={36.137}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2AA4F4" />
        <stop offset={1} stopColor="#007AD9" />
      </linearGradient>
    </defs>
  </svg>
);
export default TwitterLogo;
