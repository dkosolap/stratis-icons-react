import * as React from 'react';

export interface Hash01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Hash01Icon = React.forwardRef<SVGSVGElement, Hash01IconProps>(
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
      <path d="M20 16H4M20 8H4M8 20L8 4M16 20L16 4" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

Hash01Icon.displayName = 'Hash01Icon';

export { Hash01Icon };
export default Hash01Icon;
