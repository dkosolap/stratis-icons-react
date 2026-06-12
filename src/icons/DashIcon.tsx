import * as React from 'react';

export interface DashIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const DashIcon = React.forwardRef<SVGSVGElement, DashIconProps>(
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
      <path d="M19.2 12L4.80005 12" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

DashIcon.displayName = 'DashIcon';

export { DashIcon };
export default DashIcon;
