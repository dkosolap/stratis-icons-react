import * as React from 'react';

export interface TrendUp02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const TrendUp02Icon = React.forwardRef<SVGSVGElement, TrendUp02IconProps>(
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
      <path d="M17.7001 16.4831V6.2998L7.36983 6.29995M17.7001 6.2998L6.30005 17.6998" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

TrendUp02Icon.displayName = 'TrendUp02Icon';

export { TrendUp02Icon };
export default TrendUp02Icon;
