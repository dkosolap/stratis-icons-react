import * as React from 'react';

export interface ChevronUpIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ChevronUpIcon = React.forwardRef<SVGSVGElement, ChevronUpIconProps>(
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
      <path d="M7 14.5834L12.0008 10L17 14.5834" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ChevronUpIcon.displayName = 'ChevronUpIcon';

export { ChevronUpIcon };
export default ChevronUpIcon;
