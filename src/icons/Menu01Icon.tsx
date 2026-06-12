import * as React from 'react';

export interface Menu01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Menu01Icon = React.forwardRef<SVGSVGElement, Menu01IconProps>(
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
      <path d="M20 18H4M20 12H4M20 6H4" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

Menu01Icon.displayName = 'Menu01Icon';

export { Menu01Icon };
export default Menu01Icon;
