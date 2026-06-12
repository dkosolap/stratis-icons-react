import * as React from 'react';

export interface DownArrowIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const DownArrowIcon = React.forwardRef<SVGSVGElement, DownArrowIconProps>(
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
      <path d="M5 13.3333L12 20L19 13.3333M12 20L12 4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

DownArrowIcon.displayName = 'DownArrowIcon';

export { DownArrowIcon };
export default DownArrowIcon;
