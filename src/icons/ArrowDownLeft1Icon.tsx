import * as React from 'react';

export interface ArrowDownLeft1IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ArrowDownLeft1Icon = React.forwardRef<SVGSVGElement, ArrowDownLeft1IconProps>(
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
      <path d="M7.05029 8.54851L7.05029 16.9493L15.5723 16.9492M7.05029 16.9493L16.9498 7.0498" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ArrowDownLeft1Icon.displayName = 'ArrowDownLeft1Icon';

export { ArrowDownLeft1Icon };
export default ArrowDownLeft1Icon;
