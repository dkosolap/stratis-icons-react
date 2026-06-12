import * as React from 'react';

export interface Pencil02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Pencil02Icon = React.forwardRef<SVGSVGElement, Pencil02IconProps>(
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
      <path d="M11.9999 22.2004H21.5999M14.9999 4.80039L19.1999 8.40039M4.1999 15.6004L16.0313 3.35582C17.3052 2.08192 19.3706 2.08191 20.6445 3.35581C21.9184 4.62971 21.9184 6.69512 20.6445 7.96902L8.3999 19.8004L2.3999 21.6004L4.1999 15.6004Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Pencil02Icon.displayName = 'Pencil02Icon';

export { Pencil02Icon };
export default Pencil02Icon;
