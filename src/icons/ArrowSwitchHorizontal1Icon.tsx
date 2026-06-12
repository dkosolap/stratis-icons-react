import * as React from 'react';

export interface ArrowSwitchHorizontal1IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ArrowSwitchHorizontal1Icon = React.forwardRef<SVGSVGElement, ArrowSwitchHorizontal1IconProps>(
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
      <path d="M21 6.375L17.625 3L14.25 6.375M17.625 3L17.625 21M3 17.625L6.375 21L9.75 17.625M6.375 21L6.375 3" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ArrowSwitchHorizontal1Icon.displayName = 'ArrowSwitchHorizontal1Icon';

export { ArrowSwitchHorizontal1Icon };
export default ArrowSwitchHorizontal1Icon;
