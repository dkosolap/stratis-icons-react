import * as React from 'react';

export interface DownArrowSmIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const DownArrowSmIcon = React.forwardRef<SVGSVGElement, DownArrowSmIconProps>(
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
      <path d="M7.625 12.8333L12 17L16.375 12.8333M12 17L12 7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

DownArrowSmIcon.displayName = 'DownArrowSmIcon';

export { DownArrowSmIcon };
export default DownArrowSmIcon;
