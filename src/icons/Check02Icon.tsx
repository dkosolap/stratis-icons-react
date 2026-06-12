import * as React from 'react';

export interface Check02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Check02Icon = React.forwardRef<SVGSVGElement, Check02IconProps>(
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
      <path d="M7 11.8784C7.94144 12.5631 9.82432 14.4459 10.5946 15.7297C11.536 13.6757 13.9324 9.05405 16.5 7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Check02Icon.displayName = 'Check02Icon';

export { Check02Icon };
export default Check02Icon;
