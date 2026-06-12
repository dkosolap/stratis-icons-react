import * as React from 'react';

export interface Menu03IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Menu03Icon = React.forwardRef<SVGSVGElement, Menu03IconProps>(
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
      <path d="M4 6L20 6M9.5 12L20 12M4 18L20 18" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

Menu03Icon.displayName = 'Menu03Icon';

export { Menu03Icon };
export default Menu03Icon;
