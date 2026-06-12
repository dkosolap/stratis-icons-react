import * as React from 'react';

export interface ChevronDownIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ChevronDownIcon = React.forwardRef<SVGSVGElement, ChevronDownIconProps>(
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
      <path d="M7 10L12.0008 14.58L17 10" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ChevronDownIcon.displayName = 'ChevronDownIcon';

export { ChevronDownIcon };
export default ChevronDownIcon;
