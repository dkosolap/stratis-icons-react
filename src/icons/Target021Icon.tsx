import * as React from 'react';

export interface Target021IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Target021Icon = React.forwardRef<SVGSVGElement, Target021IconProps>(
  ({ size = 24, color = 'currentColor', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 25 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M8.65186 3.99993C9.69432 3.61196 10.8224 3.39993 12 3.39993C17.3019 3.39993 21.6 7.698 21.6 12.9999C21.6 14.273 21.3522 15.4882 20.9022 16.5999M15 22.1219C14.0561 22.4321 13.0477 22.5999 12 22.5999C6.69806 22.5999 2.4 18.3019 2.4 12.9999C2.4 11.7268 2.64781 10.5116 3.09782 9.39993M12 5.8V1M12 25V20.2M19.2 13H24M0 13H4.8M3.6 4L20.4 22.6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Target021Icon.displayName = 'Target021Icon';

export { Target021Icon };
export default Target021Icon;
