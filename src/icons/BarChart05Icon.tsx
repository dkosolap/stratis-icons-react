import * as React from 'react';

export interface BarChart05IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BarChart05Icon = React.forwardRef<SVGSVGElement, BarChart05IconProps>(
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
      <path d="M21.6001 21.5999V19.4666M15.2001 21.5999V14.1332M8.8001 21.5999V8.7999M2.4001 21.5999V2.3999" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

BarChart05Icon.displayName = 'BarChart05Icon';

export { BarChart05Icon };
export default BarChart05Icon;
