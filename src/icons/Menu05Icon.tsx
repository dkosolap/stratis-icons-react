import * as React from 'react';

export interface Menu05IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Menu05Icon = React.forwardRef<SVGSVGElement, Menu05IconProps>(
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
      <path d="M10.5 18H20M4 12H20M4 6H20" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

Menu05Icon.displayName = 'Menu05Icon';

export { Menu05Icon };
export default Menu05Icon;
