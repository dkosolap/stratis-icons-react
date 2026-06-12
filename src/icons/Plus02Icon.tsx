import * as React from 'react';

export interface Plus02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Plus02Icon = React.forwardRef<SVGSVGElement, Plus02IconProps>(
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
      <path d="M12 6L12 18M18 12L6 12" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

Plus02Icon.displayName = 'Plus02Icon';

export { Plus02Icon };
export default Plus02Icon;
