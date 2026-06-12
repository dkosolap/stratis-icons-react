import * as React from 'react';

export interface Stopwatch04IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Stopwatch04Icon = React.forwardRef<SVGSVGElement, Stopwatch04IconProps>(
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
      <path d="M9.6 9.68696L12.1826 13.3043H16.2M19.5007 3.49986L22.0051 6.00421M2.00073 6.49986L4.50508 3.99551M9.5 2H14.5M20.5 13.4286C20.5 18.1624 16.6944 22 12 22C7.30558 22 3.5 18.1624 3.5 13.4286C3.5 8.6947 7.30558 4.85714 12 4.85714C16.6944 4.85714 20.5 8.6947 20.5 13.4286Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Stopwatch04Icon.displayName = 'Stopwatch04Icon';

export { Stopwatch04Icon };
export default Stopwatch04Icon;
