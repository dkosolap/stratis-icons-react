import * as React from 'react';

export interface Hourglass02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Hourglass02Icon = React.forwardRef<SVGSVGElement, Hourglass02IconProps>(
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
      <path d="M9.82447 17.9143H14.6755M17.2287 21H7.27128C6.70724 21 6.25 20.5395 6.25 19.9714V17.2237C6.25 17.0042 6.31977 16.7904 6.44909 16.6136L9.37807 12.6101C9.64353 12.2473 9.64353 11.7527 9.37807 11.3899L6.44909 7.38641C6.31977 7.20964 6.25 6.99584 6.25 6.77626V4.02857C6.25 3.46051 6.70724 3 7.27128 3H16.9734C17.5374 3 17.9947 3.46051 17.9947 4.02857V6.79608C17.9947 7.00337 17.9325 7.20582 17.8163 7.3769L15.0851 11.3971C14.8398 11.7581 14.8481 12.2359 15.1058 12.5881L18.0509 16.6136C18.1802 16.7904 18.25 17.0042 18.25 17.2237V19.9714C18.25 20.5395 17.7928 21 17.2287 21Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Hourglass02Icon.displayName = 'Hourglass02Icon';

export { Hourglass02Icon };
export default Hourglass02Icon;
