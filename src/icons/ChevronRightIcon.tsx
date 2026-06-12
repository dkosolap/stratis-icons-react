import * as React from 'react';

export interface ChevronRightIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ChevronRightIcon = React.forwardRef<SVGSVGElement, ChevronRightIconProps>(
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
      <path d="M10 7L15 12L10 17" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ChevronRightIcon.displayName = 'ChevronRightIcon';

export { ChevronRightIcon };
export default ChevronRightIcon;
