import * as React from 'react';

export interface ArrowDownRightSmIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ArrowDownRightSmIcon = React.forwardRef<SVGSVGElement, ArrowDownRightSmIconProps>(
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
      <path d="M16 14.7765L15.9059 8.09412L9.22353 8M15.9059 8.09412L8 16" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ArrowDownRightSmIcon.displayName = 'ArrowDownRightSmIcon';

export { ArrowDownRightSmIcon };
export default ArrowDownRightSmIcon;
