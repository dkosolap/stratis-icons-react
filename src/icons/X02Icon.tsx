import * as React from 'react';

export interface X02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const X02Icon = React.forwardRef<SVGSVGElement, X02IconProps>(
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
      <path d="M18 6L6 18M18 18L6 6" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

X02Icon.displayName = 'X02Icon';

export { X02Icon };
export default X02Icon;
