import * as React from 'react';

export interface BarChartSquareUp01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BarChartSquareUp01Icon = React.forwardRef<SVGSVGElement, BarChartSquareUp01IconProps>(
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
      <path d="M3.5999 15.5999L7.44966 12L10.1995 14.5713L16.2491 8.91429M12.1333 8.3999H16.7999V12.7637M4.7999 21.5999C3.47442 21.5999 2.3999 20.5254 2.3999 19.1999V4.7999C2.3999 3.47442 3.47442 2.3999 4.7999 2.3999H19.1999C20.5254 2.3999 21.5999 3.47442 21.5999 4.7999V19.1999C21.5999 20.5254 20.5254 21.5999 19.1999 21.5999H4.7999Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

BarChartSquareUp01Icon.displayName = 'BarChartSquareUp01Icon';

export { BarChartSquareUp01Icon };
export default BarChartSquareUp01Icon;
