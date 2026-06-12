import * as React from 'react';

export interface ArrowRightSmIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ArrowRightSmIcon = React.forwardRef<SVGSVGElement, ArrowRightSmIconProps>(
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
      <path d="M12.8333 16.375L17 12L12.8333 7.625M17 12L7 12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ArrowRightSmIcon.displayName = 'ArrowRightSmIcon';

export { ArrowRightSmIcon };
export default ArrowRightSmIcon;
