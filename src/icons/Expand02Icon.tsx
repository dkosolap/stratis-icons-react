import * as React from 'react';

export interface Expand02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Expand02Icon = React.forwardRef<SVGSVGElement, Expand02IconProps>(
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
      <path d="M14.0004 9.99958L21 3.00003M20.9999 8.14263L21 3.00003L15.8572 3M10.0004 14L3.00044 21M3.00051 15.8574L3.00044 21L8.14326 21M14.0004 14L21 20.9996M15.8573 20.9995L21 20.9996L21 15.8569M10.0004 10.0004L3.00003 3.00003M8.14275 3.0001L3.00003 3.00003L3 8.14272" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Expand02Icon.displayName = 'Expand02Icon';

export { Expand02Icon };
export default Expand02Icon;
