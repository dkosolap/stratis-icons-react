import * as React from 'react';

export interface FastForwardIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const FastForwardIcon = React.forwardRef<SVGSVGElement, FastForwardIconProps>(
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
      <path d="M10.081 11.5191L3.56103 4.99916C3.13254 4.57068 2.3999 4.87415 2.3999 5.48012L2.3999 18.5201C2.3999 19.126 3.13254 19.4295 3.56103 19.001L10.081 12.481C10.3466 12.2154 10.3466 11.7848 10.081 11.5191Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.4007 11.5191L14.8807 4.99916C14.4522 4.57068 13.7196 4.87415 13.7196 5.48012V18.5201C13.7196 19.126 14.4522 19.4295 14.8807 19.001L21.4007 12.481C21.6663 12.2154 21.6663 11.7848 21.4007 11.5191Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

FastForwardIcon.displayName = 'FastForwardIcon';

export { FastForwardIcon };
export default FastForwardIcon;
