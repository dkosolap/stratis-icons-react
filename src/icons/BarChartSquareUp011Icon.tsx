import * as React from 'react';

export interface BarChartSquareUp011IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BarChartSquareUp011Icon = React.forwardRef<SVGSVGElement, BarChartSquareUp011IconProps>(
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
      <path d="M6.50059 14.0002L10.7006 9.8002L13.7006 12.8002L17.3006 9.2002M4.4 21.2C3.07451 21.2 2 20.1255 2 18.8V4.4C2 3.07452 3.07452 2 4.4 2H18.8C20.1255 2 21.2 3.07452 21.2 4.4V18.8C21.2 20.1255 20.1255 21.2 18.8 21.2H4.4Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

BarChartSquareUp011Icon.displayName = 'BarChartSquareUp011Icon';

export { BarChartSquareUp011Icon };
export default BarChartSquareUp011Icon;
