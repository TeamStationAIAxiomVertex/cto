import * as React from "react";

export function SpotifyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 168 168" aria-hidden="true" focusable="false" {...props}>
      <path
        d="M84 0a84 84 0 1 0 0 168 84 84 0 0 0 0-168Zm38.7 121.3a6 6 0 0 1-8.3 2c-22.8-14-51.6-17.2-85.3-9.4a6 6 0 1 1-2.7-11.7c36.7-8.4 68.5-4.7 93 10.7a6 6 0 0 1 2.3 8.4Zm11-24.4a7.4 7.4 0 0 1-10.2 2.4c-26.1-16-65.9-20.7-96.7-11.3a7.4 7.4 0 1 1-4.2-14.2c34.6-10.2 78-5 107.6 13.1a7.4 7.4 0 0 1 3.5 10Zm1.3-25.9c-31-18.4-82.2-20.6-111.7-11.3a9 9 0 1 1-5.3-17.2c34.2-10.5 90.2-7.8 126 13.3a9 9 0 1 1-9 15.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SpotifyIcon;
