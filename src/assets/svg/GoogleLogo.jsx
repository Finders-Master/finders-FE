/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

const GoogleLogo = (props) => (
  <svg
    width={45}
    height={46}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#prefix__clip0)">
      <path
        d="M44.976 23.43c0-1.884-.153-3.26-.484-4.686H22.948v8.506h12.646c-.255 2.114-1.632 5.298-4.691 7.437l-.043.285 6.812 5.27.471.048c4.335-3.998 6.833-9.882 6.833-16.86"
        fill="#4285F4"
      />
      <path
        d="M22.948 45.842c6.195 0 11.397-2.038 15.196-5.552l-7.241-5.603c-1.938 1.35-4.538 2.292-7.955 2.292-6.068 0-11.218-3.998-13.054-9.525l-.269.023-7.083 5.476-.092.257c3.773 7.487 11.524 12.632 20.498 12.632z"
        fill="#34A853"
      />
      <path
        d="M9.894 27.454a14.097 14.097 0 01-.764-4.533c0-1.58.28-3.107.739-4.533l-.013-.304-7.172-5.564-.234.112A22.922 22.922 0 00.002 22.92c0 3.693.893 7.182 2.448 10.289l7.444-5.756"
        fill="#FBBC05"
      />
      <path
        d="M22.948 8.863c4.309 0 7.215 1.859 8.873 3.412l6.475-6.316C34.32 2.267 29.144 0 22.948 0 13.974 0 6.223 5.144 2.45 12.632l7.419 5.756c1.861-5.527 7.011-9.525 13.08-9.525"
        fill="#EB4335"
      />
    </g>
    <defs>
      <clipPath id="prefix__clip0">
        <path fill="#fff" d="M0 0h45v46H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default GoogleLogo;
