import * as React from 'react';

export interface EqualsNotIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const EqualsNotIcon = React.forwardRef<SVGSVGElement, EqualsNotIconProps>(
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
      <path d="M20 16.2H4M20 7.8H4M6 19L18 5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

EqualsNotIcon.displayName = 'EqualsNotIcon';

export { EqualsNotIcon };
export default EqualsNotIcon;
