import * as React from 'react';

export interface ArrowLeftSmIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ArrowLeftSmIcon = React.forwardRef<SVGSVGElement, ArrowLeftSmIconProps>(
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
      <path d="M11.1667 7.625L7 12L11.1667 16.375M7 12H17" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ArrowLeftSmIcon.displayName = 'ArrowLeftSmIcon';

export { ArrowLeftSmIcon };
export default ArrowLeftSmIcon;
