import * as React from 'react';

export interface ChevronDoubleRightIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ChevronDoubleRightIcon = React.forwardRef<SVGSVGElement, ChevronDoubleRightIconProps>(
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
      <path d="M10.6 17.2L5 11.6L10.6 6M19 17.2L13.4 11.6L19 6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ChevronDoubleRightIcon.displayName = 'ChevronDoubleRightIcon';

export { ChevronDoubleRightIcon };
export default ChevronDoubleRightIcon;
