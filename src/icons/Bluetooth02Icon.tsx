import * as React from 'react';

export interface Bluetooth02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Bluetooth02Icon = React.forwardRef<SVGSVGElement, Bluetooth02IconProps>(
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
      <path d="M6 8.36638L18 16.125L11.6 21V3L18 7.875L6 15.6336" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Bluetooth02Icon.displayName = 'Bluetooth02Icon';

export { Bluetooth02Icon };
export default Bluetooth02Icon;
