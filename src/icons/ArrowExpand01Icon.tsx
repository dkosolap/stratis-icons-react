import * as React from 'react';

export interface ArrowExpand01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ArrowExpand01Icon = React.forwardRef<SVGSVGElement, ArrowExpand01IconProps>(
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
      <path d="M4 16V20H8M4 20L8.5 15.5M20 8V4H16M20 4L15.5 8.5M8 4L4 4L4 8M4 4L8.5 8.5M16 20H20L20 16M20 20L15.5 15.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ArrowExpand01Icon.displayName = 'ArrowExpand01Icon';

export { ArrowExpand01Icon };
export default ArrowExpand01Icon;
