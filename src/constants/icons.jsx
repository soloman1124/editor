// @flow

import React from 'react';

type Props = {
  fill: string,
};

export default {
  PHOTO: ({ fill }: Props) => (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        fill={fill}
        strokeWidth="0"
        d="M2,20.3218391 L22,20.3218391 L22,4 L2,4 L2,20.3218391 Z M3.6091954,18.7126437 L20.3908046,18.7126437 L20.3908046,5.6091954 L3.6091954,5.6091954 L3.6091954,18.7126437 Z M10.6833333,16.5217701 L13.8391954,11.4603908 L16.9948276,16.5217701 L18.8911494,16.5217701 L13.8391954,8.41878161 L11.2277011,12.6072874 L9.38862069,9.65763218 L5.10885057,16.5217701 L10.6833333,16.5217701 Z" />
    </svg>
  ),
  SLIDER: ({ fill }: Props) => (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        fill={fill}
        strokeWidth="0"
        d="M7.41666667,15.8020833 L7.41666667,8.46875 L16.5833333,8.46875 L16.5833333,15.8020833 L7.41666667,15.8020833 Z M2.03125,5.60416667 L2.03125,4 L21.96875,4 L21.96875,5.60416667 L2.03125,5.60416667 Z M2.03125,20.2708333 L2.03125,18.6666667 L21.96875,18.6666667 L21.96875,20.2708333 L2.03125,20.2708333 Z M1,15.8020833 L1,8.46897917 L4.66666667,8.46897917 L4.66666667,15.8020833 L1,15.8020833 Z M19.3333333,15.8020833 L19.3333333,8.46897917 L23,8.46897917 L23,15.8020833 L19.3333333,15.8020833 Z" />
    </svg>
  ),
  VIDEO: ({ fill }: Props) => (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        fill={fill}
        strokeWidth="0"
        d="M9.35967816,9.01503448 L9.35967816,15.3067586 L15.6516322,12.1610115 L9.35967816,9.01503448 Z M2,20.3218391 L22,20.3218391 L22,4 L2,4 L2,20.3218391 Z M3.6091954,18.7126437 L20.3908046,18.7126437 L20.3908046,5.6091954 L3.6091954,5.6091954 L3.6091954,18.7126437 Z" />
    </svg>
  ),
  INSTAGRAM: ({ fill }: Props) => (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        fill={fill}
        strokeWidth="0"
        d="M21.3076,17.376 C21.3076,19.544 19.5436,21.309 17.3756,21.309 L7.5406,21.309 C5.3726,21.309 3.6096,19.544 3.6096,17.376 L3.6096,7.542 C3.6096,5.374 5.3726,3.609 7.5406,3.609 L17.3756,3.609 C19.5436,3.609 21.3076,5.374 21.3076,7.542 L21.3076,17.376 Z M17.3756,2 L7.5406,2 C4.4856,2 1.9996,4.486 1.9996,7.542 L1.9996,17.376 C1.9996,20.432 4.4856,22.918 7.5406,22.918 L17.3756,22.918 C20.4316,22.918 22.9166,20.432 22.9166,17.376 L22.9166,7.542 C22.9166,4.486 20.4316,2 17.3756,2 Z M12.458,16.4815 C10.241,16.4815 8.437,14.6765 8.437,12.4595 C8.437,10.2415 10.241,8.4365 12.458,8.4365 C14.676,8.4365 16.48,10.2415 16.48,12.4595 C16.48,14.6765 14.676,16.4815 12.458,16.4815 M12.458,6.8275 C9.353,6.8275 6.827,9.3535 6.827,12.4595 C6.827,15.5645 9.353,18.0905 12.458,18.0905 C15.563,18.0905 18.09,15.5645 18.09,12.4595 C18.09,9.3535 15.563,6.8275 12.458,6.8275 M18.3213,5.5606 C17.7493,5.5606 17.2853,6.0236 17.2853,6.5956 C17.2853,7.1676 17.7493,7.6316 18.3213,7.6316 C18.8933,7.6316 19.3573,7.1676 19.3573,6.5956 C19.3573,6.0236 18.8933,5.5606 18.3213,5.5606" />
    </svg>
  ),
  FACEBOOK: ({ fill }: Props) => (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        fill={fill}
        strokeWidth="0"
        d="M21.3076,19.7285 C21.3076,20.5975 20.5966,21.3085 19.7276,21.3085 L15.3216,21.3085 L15.3216,14.0685 L17.7306,14.0685 L18.1006,11.5795 L15.3216,11.5795 L15.3216,9.7655 C15.3216,9.5015 15.5366,9.2875 15.7996,9.2875 L18.1006,9.2875 L18.1006,6.8205 L14.9656,6.7515 C13.5806,6.7515 12.4576,7.8745 12.4576,9.2595 L12.4576,11.5795 L10.8496,11.5795 L10.8496,14.0685 L12.4576,14.0685 L12.4576,21.3085 L5.1886,21.3085 C4.3166,21.3085 3.6096,20.6015 3.6096,19.7295 L3.6096,5.1885 C3.6096,4.3205 4.3206,3.6095 5.1886,3.6095 L19.7276,3.6095 C20.6006,3.6095 21.3076,4.3165 21.3076,5.1895 L21.3076,19.7285 Z M19.7286,1.9995 L5.1886,1.9995 C3.4296,1.9995 1.9996,3.4305 1.9996,5.1895 L1.9996,19.7285 C1.9996,21.4875 3.4296,22.9175 5.1886,22.9175 L19.7286,22.9175 C21.4876,22.9175 22.9166,21.4875 22.9166,19.7285 L22.9166,5.1895 C22.9166,3.4305 21.4876,1.9995 19.7286,1.9995 Z" />
    </svg>
  ),
};