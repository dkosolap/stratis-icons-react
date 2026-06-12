import * as React from 'react';

export interface TrendDown02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const TrendDown02Icon = React.forwardRef<SVGSVGElement, TrendDown02IconProps>(
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
      <path d="M7.51675 17.6998H17.7001L17.6999 7.36958M17.7001 17.6998L6.30005 6.29981" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

TrendDown02Icon.displayName = 'TrendDown02Icon';

export { TrendDown02Icon };
export default TrendDown02Icon;
