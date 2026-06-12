import * as React from 'react';

export interface StopCircleContainedIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const StopCircleContainedIcon = React.forwardRef<SVGSVGElement, StopCircleContainedIconProps>(
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
      <path d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
<path d="M8.625 9.89062C8.625 9.19164 9.19164 8.625 9.89062 8.625H14.1094C14.8084 8.625 15.375 9.19164 15.375 9.89062V14.1094C15.375 14.8084 14.8084 15.375 14.1094 15.375H9.89062C9.19164 15.375 8.625 14.8084 8.625 14.1094V9.89062Z" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  )
);

StopCircleContainedIcon.displayName = 'StopCircleContainedIcon';

export { StopCircleContainedIcon };
export default StopCircleContainedIcon;
