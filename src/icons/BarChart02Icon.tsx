import * as React from 'react';

export interface BarChart02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BarChart02Icon = React.forwardRef<SVGSVGElement, BarChart02IconProps>(
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
      <path d="M19.2 19.2001V16.8001M12 19.2001V10.8M4.79995 19.2001V4.80005" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

BarChart02Icon.displayName = 'BarChart02Icon';

export { BarChart02Icon };
export default BarChart02Icon;
