import * as React from 'react';

export interface ArrowSwitchHorizontalIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ArrowSwitchHorizontalIcon = React.forwardRef<SVGSVGElement, ArrowSwitchHorizontalIconProps>(
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
      <path d="M6.375 3L3 6.375L6.375 9.75M3 6.375H21M17.625 21L21 17.625L17.625 14.25M21 17.625H3" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ArrowSwitchHorizontalIcon.displayName = 'ArrowSwitchHorizontalIcon';

export { ArrowSwitchHorizontalIcon };
export default ArrowSwitchHorizontalIcon;
