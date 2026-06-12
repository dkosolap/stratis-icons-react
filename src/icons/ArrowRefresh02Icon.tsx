import * as React from 'react';

export interface ArrowRefresh02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ArrowRefresh02Icon = React.forwardRef<SVGSVGElement, ArrowRefresh02IconProps>(
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
      <path d="M19.4221 8.01389C18.0322 5.61438 15.4343 4 12.4588 4C9.08513 4 6.19686 6.07535 5.00433 9.01736M16.9806 9.01736H21V5.00347M5.57787 16.0417C6.96782 18.4412 9.56573 20.0556 12.5412 20.0556C15.9149 20.0556 18.8031 17.9802 19.9957 15.0382M8.0194 15.0382H4V19.0521" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ArrowRefresh02Icon.displayName = 'ArrowRefresh02Icon';

export { ArrowRefresh02Icon };
export default ArrowRefresh02Icon;
