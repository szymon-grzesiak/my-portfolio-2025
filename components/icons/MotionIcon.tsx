import React from "react";

export function MotionIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="51"
      height="50"
      viewBox="0 0 51 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_3309_741)">
        <path
          d="M50.0825 0V25L25.0825 50L12.5825 37.5L25.0825 25L50.0825 0Z"
          fill="#778295"
        />
        <path d="M50.0825 25V50L37.5825 37.5L50.0825 25Z" fill="#778295" />
        <path d="M25.0825 25L0.0825195 50V0L25.0825 25Z" fill="#778295" />
      </g>
      <defs>
        <clipPath id="clip0_3309_741">
          <rect
            width="50"
            height="50"
            fill="white"
            transform="translate(0.0825195)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
