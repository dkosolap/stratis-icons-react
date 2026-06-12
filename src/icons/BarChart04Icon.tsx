import * as React from 'react';

export interface BarChart04IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BarChart04Icon = React.forwardRef<SVGSVGElement, BarChart04IconProps>(
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
      <path d="M2.3999 20.7V7.90005M8.7999 20.7V13.2334M15.1999 20.7V3.30005M21.5999 20.7V7.90005" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

BarChart04Icon.displayName = 'BarChart04Icon';

export { BarChart04Icon };
export default BarChart04Icon;
