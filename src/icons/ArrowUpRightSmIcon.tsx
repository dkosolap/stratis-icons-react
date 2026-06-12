import * as React from 'react';

export interface ArrowUpRightSmIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ArrowUpRightSmIcon = React.forwardRef<SVGSVGElement, ArrowUpRightSmIconProps>(
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
      <path d="M8 9.22353L8.09412 15.9059L14.7765 16M8.09412 15.9059L16 8" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ArrowUpRightSmIcon.displayName = 'ArrowUpRightSmIcon';

export { ArrowUpRightSmIcon };
export default ArrowUpRightSmIcon;
