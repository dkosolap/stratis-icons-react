import * as React from 'react';

export interface Wallet02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Wallet02Icon = React.forwardRef<SVGSVGElement, Wallet02IconProps>(
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
      <path d="M17.7599 3.04004H3.89323C3.06849 3.04004 2.40168 3.92668 2.40091 4.84004C2.3999 6.04004 3.06849 7.22671 3.89324 7.22671H19.4666C20.6448 7.22671 21.5999 6.98183 21.5999 8.16004V18.4C21.5999 19.8139 20.4538 20.96 19.0399 20.96H4.9599C3.54605 20.96 2.3999 19.8139 2.3999 18.4V5.44004M16.4966 13.2633L16.4799 13.28" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Wallet02Icon.displayName = 'Wallet02Icon';

export { Wallet02Icon };
export default Wallet02Icon;
