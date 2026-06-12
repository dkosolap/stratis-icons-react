import * as React from 'react';

export interface BarChartSquare01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BarChartSquare01Icon = React.forwardRef<SVGSVGElement, BarChartSquare01IconProps>(
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
      <path d="M7.1999 16.7999V14.3999M11.9999 16.7999V11.9999M16.7999 16.7999V7.1999M4.7999 21.5999C3.47442 21.5999 2.3999 20.5254 2.3999 19.1999V4.7999C2.3999 3.47442 3.47442 2.3999 4.7999 2.3999H19.1999C20.5254 2.3999 21.5999 3.47442 21.5999 4.7999V19.1999C21.5999 20.5254 20.5254 21.5999 19.1999 21.5999H4.7999Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

BarChartSquare01Icon.displayName = 'BarChartSquare01Icon';

export { BarChartSquare01Icon };
export default BarChartSquare01Icon;
