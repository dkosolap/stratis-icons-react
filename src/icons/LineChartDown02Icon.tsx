import * as React from 'react';

export interface LineChartDown02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const LineChartDown02Icon = React.forwardRef<SVGSVGElement, LineChartDown02IconProps>(
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
      <path d="M2.3999 2.3999V21.5999H21.5999M7.1999 8.3999L11.5999 12.218L14.7427 9.49079L20.3999 14.3999" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

LineChartDown02Icon.displayName = 'LineChartDown02Icon';

export { LineChartDown02Icon };
export default LineChartDown02Icon;
