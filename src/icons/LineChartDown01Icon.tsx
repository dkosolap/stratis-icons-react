import * as React from 'react';

export interface LineChartDown01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const LineChartDown01Icon = React.forwardRef<SVGSVGElement, LineChartDown01IconProps>(
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
      <path d="M2.3999 2.3999V21.5999H21.5999M7.1999 5.9999L11.3996 10.1998L14.3994 7.19988L20.999 13.7998M16.5091 14.3999H21.5999V9.30881" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

LineChartDown01Icon.displayName = 'LineChartDown01Icon';

export { LineChartDown01Icon };
export default LineChartDown01Icon;
