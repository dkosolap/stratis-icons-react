import * as React from 'react';

export interface Stopwatch01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Stopwatch01Icon = React.forwardRef<SVGSVGElement, Stopwatch01IconProps>(
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
      <path d="M21.1721 6.41558L20.0032 5.24675L18.8344 4.07792M9.22403 2H14.1591M18.0552 7.19481L20.0032 5.24675M12.7711 10.961L11.0909 12.6412L12.7711 14.3214L11.0909 16.0016M20.3929 13.4286C20.3929 18.1624 16.5553 22 11.8214 22C7.08756 22 3.25 18.1624 3.25 13.4286C3.25 8.6947 7.08756 4.85714 11.8214 4.85714C16.5553 4.85714 20.3929 8.6947 20.3929 13.4286Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Stopwatch01Icon.displayName = 'Stopwatch01Icon';

export { Stopwatch01Icon };
export default Stopwatch01Icon;
