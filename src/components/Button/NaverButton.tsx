import React from "react";

function NaverButton() {
  return (
    <button>
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="60" height="60" rx="30" fill="#03C75A" />
        <g clipPath="url(#clip0_17_383)">
          <path
            d="M33.5614 30.7033L26.1461 20H20V40H26.4386V29.295L33.8539 40H40V20H33.5614V30.7033Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_17_383">
            <rect
              width="20"
              height="20"
              fill="white"
              transform="translate(20 20)"
            />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}

export default NaverButton;
