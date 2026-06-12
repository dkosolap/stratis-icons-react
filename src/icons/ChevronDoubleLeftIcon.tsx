import * as React from 'react';

export interface ChevronDoubleLeftIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ChevronDoubleLeftIcon = React.forwardRef<SVGSVGElement, ChevronDoubleLeftIconProps>(
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
      <path d="M13.4 5.8L19 11.4L13.4 17M5 5.8L10.6 11.4L5 17" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ChevronDoubleLeftIcon.displayName = 'ChevronDoubleLeftIcon';

export { ChevronDoubleLeftIcon };
export default ChevronDoubleLeftIcon;
