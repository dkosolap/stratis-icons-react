import * as React from 'react';

export interface ArrowExpand02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ArrowExpand02Icon = React.forwardRef<SVGSVGElement, ArrowExpand02IconProps>(
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
      <path d="M19.9995 9.79311V4H14.2064M19.9995 4L14.2064 9.79311M4.00052 14.2069V20H9.79363M4.00052 20L10.0005 14M14.2069 19.9995H20V14.2064M20 19.9995L14.2069 14.2064M9.79311 4.00052L4 4.00052L4 9.79363M4 4.00052L10 10.0005" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ArrowExpand02Icon.displayName = 'ArrowExpand02Icon';

export { ArrowExpand02Icon };
export default ArrowExpand02Icon;
