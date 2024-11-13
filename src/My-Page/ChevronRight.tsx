import React from "react";

function ChevronRight({
  size = 24,
  fill = "black",
}: {
  size?: number;
  fill?: string;
}) {
  return (
    <div>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.29303 7.29303C9.48056 7.10556 9.73487 7.00024 10 7.00024C10.2652 7.00024 10.5195 7.10556 10.707 7.29303L15.414 12L10.707 16.707C10.5184 16.8892 10.2658 16.99 10.0036 16.9877C9.74143 16.9854 9.49062 16.8803 9.30521 16.6948C9.1198 16.5094 9.01464 16.2586 9.01236 15.9964C9.01008 15.7342 9.11087 15.4816 9.29303 15.293L12.586 12L9.29303 8.70703C9.10556 8.5195 9.00024 8.26519 9.00024 8.00003C9.00024 7.73487 9.10556 7.48056 9.29303 7.29303Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

export default ChevronRight;
