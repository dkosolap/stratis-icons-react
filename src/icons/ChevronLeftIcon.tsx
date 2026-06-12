import * as React from 'react';

export interface ChevronLeftIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ChevronLeftIcon = React.forwardRef<SVGSVGElement, ChevronLeftIconProps>(
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
      <path d="M15 17L10 12L15 7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ChevronLeftIcon.displayName = 'ChevronLeftIcon';

export { ChevronLeftIcon };
export default ChevronLeftIcon;
