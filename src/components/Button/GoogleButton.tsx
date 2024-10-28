import React from "react";

function GoogleButton() {
  return (
    <button>
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.25"
          y="0.25"
          width="59.5"
          height="59.5"
          rx="29.75"
          fill="white"
        />
        <rect
          x="0.25"
          y="0.25"
          width="59.5"
          height="59.5"
          rx="29.75"
          stroke="#E8E8E8"
          stroke-width="0.5"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M41.52 30.2727C41.52 29.4218 41.4436 28.6036 41.3018 27.8182H30V32.46H36.4582C36.18 33.96 35.3345 35.2309 34.0636 36.0818V39.0927H37.9418C40.2109 37.0036 41.52 33.9273 41.52 30.2727Z"
          fill="#4285F4"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M30 42C33.24 42 35.9564 40.9255 37.9418 39.0928L34.0636 36.0818C32.9891 36.8018 31.6145 37.2273 30 37.2273C26.8745 37.2273 24.2291 35.1164 23.2855 32.28H19.2764V35.3891C21.2509 39.3109 25.3091 42 30 42Z"
          fill="#34A853"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M23.2855 32.28C23.0455 31.56 22.9091 30.7909 22.9091 30C22.9091 29.2091 23.0455 28.44 23.2855 27.72V24.6109H19.2764C18.4636 26.2309 18 28.0636 18 30C18 31.9364 18.4636 33.7691 19.2764 35.3891L23.2855 32.28Z"
          fill="#FBBC05"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M30 22.7727C31.7618 22.7727 33.3436 23.3782 34.5873 24.5673L38.0291 21.1255C35.9509 19.1891 33.2345 18 30 18C25.3091 18 21.2509 20.6891 19.2764 24.6109L23.2855 27.72C24.2291 24.8836 26.8745 22.7727 30 22.7727Z"
          fill="#EA4335"
        />
      </svg>
    </button>
  );
}

export default GoogleButton;