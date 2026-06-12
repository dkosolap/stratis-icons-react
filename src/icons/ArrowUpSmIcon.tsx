import * as React from 'react';

export interface ArrowUpSmIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ArrowUpSmIcon = React.forwardRef<SVGSVGElement, ArrowUpSmIconProps>(
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
      <path d="M16.375 11.1667L12 7L7.625 11.1667M12 7L12 17" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ArrowUpSmIcon.displayName = 'ArrowUpSmIcon';

export { ArrowUpSmIcon };
export default ArrowUpSmIcon;
