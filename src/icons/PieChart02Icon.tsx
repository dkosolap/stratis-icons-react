import * as React from 'react';

export interface PieChart02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const PieChart02Icon = React.forwardRef<SVGSVGElement, PieChart02IconProps>(
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
      <path d="M11.4352 21.8824C16.4252 21.8824 20.4705 17.8371 20.4705 12.847H11.4352L11.4352 3.81171C6.44517 3.81168 2.3999 7.85695 2.3999 12.847C2.3999 17.8371 6.44514 21.8824 11.4352 21.8824Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.3881 2.11743V8.80702H21.5999V8.3292C21.5999 4.89853 18.8188 2.11743 15.3881 2.11743Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

PieChart02Icon.displayName = 'PieChart02Icon';

export { PieChart02Icon };
export default PieChart02Icon;
