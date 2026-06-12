import * as React from 'react';

export interface Layers02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Layers02Icon = React.forwardRef<SVGSVGElement, Layers02IconProps>(
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
      <path d="M17.3999 12.1743L21.5999 14.3271L11.9999 19.2478L2.3999 14.3271L6.67667 12.1349M11.9999 4.75195L21.5999 9.6727L11.9999 14.5934L2.3999 9.6727L11.9999 4.75195Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Layers02Icon.displayName = 'Layers02Icon';

export { Layers02Icon };
export default Layers02Icon;
