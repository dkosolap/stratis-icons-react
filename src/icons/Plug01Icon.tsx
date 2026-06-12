import * as React from 'react';

export interface Plug01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Plug01Icon = React.forwardRef<SVGSVGElement, Plug01IconProps>(
  ({ size = 24, color = 'currentColor', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M11.9811 17.6273V21.7M8.49018 4.24545V2.5M15.472 4.24545V2.5M18.9629 8.31818H4.99927M6.74472 8.31818H17.2175V12.9727C17.2175 15.5434 15.1335 17.6273 12.5629 17.6273H11.3993C8.82863 17.6273 6.74472 15.5434 6.74472 12.9727V8.31818Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Plug01Icon.displayName = 'Plug01Icon';

export { Plug01Icon };
export default Plug01Icon;
