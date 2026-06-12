import * as React from 'react';

export interface ChevronDoubleDownIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ChevronDoubleDownIcon = React.forwardRef<SVGSVGElement, ChevronDoubleDownIconProps>(
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
      <path d="M17.2 13.4L11.6 19L6 13.4M17.2 5L11.6 10.6L6 5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ChevronDoubleDownIcon.displayName = 'ChevronDoubleDownIcon';

export { ChevronDoubleDownIcon };
export default ChevronDoubleDownIcon;
