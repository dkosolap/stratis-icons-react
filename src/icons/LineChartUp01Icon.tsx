import * as React from 'react';

export interface LineChartUp01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const LineChartUp01Icon = React.forwardRef<SVGSVGElement, LineChartUp01IconProps>(
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
      <path d="M2.39966 2.3999V21.5999H21.5997M7.19966 14.4L11.3997 10.2L14.3997 13.2L20.9997 6.60003M16.5094 5.9999H21.6006V11.0911" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

LineChartUp01Icon.displayName = 'LineChartUp01Icon';

export { LineChartUp01Icon };
export default LineChartUp01Icon;
