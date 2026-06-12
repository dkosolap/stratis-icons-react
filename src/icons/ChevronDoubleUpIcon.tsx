import * as React from 'react';

export interface ChevronDoubleUpIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ChevronDoubleUpIcon = React.forwardRef<SVGSVGElement, ChevronDoubleUpIconProps>(
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
      <path d="M5.8 10.6L11.4 5L17 10.6M5.8 19L11.4 13.4L17 19" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ChevronDoubleUpIcon.displayName = 'ChevronDoubleUpIcon';

export { ChevronDoubleUpIcon };
export default ChevronDoubleUpIcon;
