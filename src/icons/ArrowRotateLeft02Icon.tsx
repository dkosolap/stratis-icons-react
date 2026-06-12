import * as React from 'react';

export interface ArrowRotateLeft02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ArrowRotateLeft02Icon = React.forwardRef<SVGSVGElement, ArrowRotateLeft02IconProps>(
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
      <path d="M4.87115 14.5C5.88914 17.6939 8.80463 20 12.2424 20C16.5268 20 20 16.4183 20 12C20 7.58172 16.5268 4 12.2424 4C9.37103 4 6.86399 5.60879 5.52267 8M4.87115 7.21845L5.93971 8.25008M7.87879 9H4V5L7.87879 9Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ArrowRotateLeft02Icon.displayName = 'ArrowRotateLeft02Icon';

export { ArrowRotateLeft02Icon };
export default ArrowRotateLeft02Icon;
