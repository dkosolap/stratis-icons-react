import * as React from 'react';

export interface EqualsIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const EqualsIcon = React.forwardRef<SVGSVGElement, EqualsIconProps>(
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
      <path d="M20 16H4M20 8H4" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

EqualsIcon.displayName = 'EqualsIcon';

export { EqualsIcon };
export default EqualsIcon;
