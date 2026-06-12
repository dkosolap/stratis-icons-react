import * as React from 'react';

export interface ArrowUpRightIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ArrowUpRightIcon = React.forwardRef<SVGSVGElement, ArrowUpRightIconProps>(
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
      <path d="M16.98 15.481L16.98 7.08019L8.45802 7.08031M16.98 7.08019L7.08052 16.9797" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ArrowUpRightIcon.displayName = 'ArrowUpRightIcon';

export { ArrowUpRightIcon };
export default ArrowUpRightIcon;
