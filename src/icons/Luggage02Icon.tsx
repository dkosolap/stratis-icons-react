import * as React from 'react';

export interface Luggage02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Luggage02Icon = React.forwardRef<SVGSVGElement, Luggage02IconProps>(
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
      <path d="M7.84375 18.6154V8.09231M15.5625 18.6154V8.09231M8.4375 7.50769V5.16923C8.4375 4.52348 8.96916 4 9.625 4H13.7812C14.4371 4 14.9688 4.52348 14.9688 5.16923V7.50769M4.875 19.2H19.125C20.4367 19.2 21.5 18.153 21.5 16.8615V9.84615C21.5 8.55466 20.4367 7.50769 19.125 7.50769H4.875C3.56332 7.50769 2.5 8.55466 2.5 9.84615V16.8615C2.5 18.153 3.56332 19.2 4.875 19.2Z" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

Luggage02Icon.displayName = 'Luggage02Icon';

export { Luggage02Icon };
export default Luggage02Icon;
