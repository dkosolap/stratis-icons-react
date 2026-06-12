import * as React from 'react';

export interface LineChartUp02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const LineChartUp02Icon = React.forwardRef<SVGSVGElement, LineChartUp02IconProps>(
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
      <path d="M2.3999 2.3999V21.5999H21.5999M7.1999 14.4L11.3999 10.2L14.3999 13.2L19.8 7.7999" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

LineChartUp02Icon.displayName = 'LineChartUp02Icon';

export { LineChartUp02Icon };
export default LineChartUp02Icon;
