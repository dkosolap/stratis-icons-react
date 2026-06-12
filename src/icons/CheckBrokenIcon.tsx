import * as React from 'react';

export interface CheckBrokenIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const CheckBrokenIcon = React.forwardRef<SVGSVGElement, CheckBrokenIconProps>(
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
      <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C13.4121 3 14.7482 3.32519 15.9375 3.90476M19.3125 6.375L11.4375 14.25L9.1875 12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

CheckBrokenIcon.displayName = 'CheckBrokenIcon';

export { CheckBrokenIcon };
export default CheckBrokenIcon;
