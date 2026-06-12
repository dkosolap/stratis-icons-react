import * as React from 'react';

export interface Hash02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Hash02Icon = React.forwardRef<SVGSVGElement, Hash02IconProps>(
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
      <path d="M20 16H4M20 8H4M6.66667 20L9.33333 4M14.6667 20L17.3333 4" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

Hash02Icon.displayName = 'Hash02Icon';

export { Hash02Icon };
export default Hash02Icon;
