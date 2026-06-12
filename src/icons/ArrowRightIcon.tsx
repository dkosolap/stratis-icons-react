import * as React from 'react';

export interface ArrowRightIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ArrowRightIcon = React.forwardRef<SVGSVGElement, ArrowRightIconProps>(
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
      <path d="M13.3333 19L20 12L13.3333 5M20 12L4 12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ArrowRightIcon.displayName = 'ArrowRightIcon';

export { ArrowRightIcon };
export default ArrowRightIcon;
