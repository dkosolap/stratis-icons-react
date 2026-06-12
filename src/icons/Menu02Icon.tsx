import * as React from 'react';

export interface Menu02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Menu02Icon = React.forwardRef<SVGSVGElement, Menu02IconProps>(
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
      <path d="M20 18H4M14.5 12H4M20 6H4" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

Menu02Icon.displayName = 'Menu02Icon';

export { Menu02Icon };
export default Menu02Icon;
