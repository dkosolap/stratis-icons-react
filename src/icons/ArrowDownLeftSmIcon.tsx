import * as React from 'react';

export interface ArrowDownLeftSmIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ArrowDownLeftSmIcon = React.forwardRef<SVGSVGElement, ArrowDownLeftSmIconProps>(
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
      <path d="M9.22353 16L15.9059 15.9059L16 9.22353M15.9059 15.9059L8 8" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ArrowDownLeftSmIcon.displayName = 'ArrowDownLeftSmIcon';

export { ArrowDownLeftSmIcon };
export default ArrowDownLeftSmIcon;
