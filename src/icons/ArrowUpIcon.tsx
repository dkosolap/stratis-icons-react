import * as React from 'react';

export interface ArrowUpIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ArrowUpIcon = React.forwardRef<SVGSVGElement, ArrowUpIconProps>(
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
      <path d="M19 10.6667L12 4L5 10.6667M12 4V20" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ArrowUpIcon.displayName = 'ArrowUpIcon';

export { ArrowUpIcon };
export default ArrowUpIcon;
