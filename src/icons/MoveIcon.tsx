import * as React from 'react';

export interface MoveIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const MoveIcon = React.forwardRef<SVGSVGElement, MoveIconProps>(
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
      <path d="M5.76304 8.63725L2.3999 12.0004L5.76304 15.3635M2.3999 12.0004H21.5999M18.2368 8.63725L21.5999 12.0004L18.2368 15.3635M15.363 5.76353L11.9999 2.40039L8.63676 5.76353M11.9999 2.40039L11.9999 21.6004M15.363 18.2372L11.9999 21.6004L8.63676 18.2372" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

MoveIcon.displayName = 'MoveIcon';

export { MoveIcon };
export default MoveIcon;
