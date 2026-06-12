import * as React from 'react';

export interface ArrowLeftIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ArrowLeftIcon = React.forwardRef<SVGSVGElement, ArrowLeftIconProps>(
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
      <path d="M10.6664 5L3.99976 12L10.6664 19M3.99976 12L19.9998 12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ArrowLeftIcon.displayName = 'ArrowLeftIcon';

export { ArrowLeftIcon };
export default ArrowLeftIcon;
