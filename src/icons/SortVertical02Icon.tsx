import * as React from 'react';

export interface SortVertical02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const SortVertical02Icon = React.forwardRef<SVGSVGElement, SortVertical02IconProps>(
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
      <path d="M13.4415 6.62732H22M13.4415 11.4421H19.5547M13.4415 16.2569H17.1094M5.80564 6V18M9.7566 14.3317L5.80564 18L2 14.3317" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

SortVertical02Icon.displayName = 'SortVertical02Icon';

export { SortVertical02Icon };
export default SortVertical02Icon;
