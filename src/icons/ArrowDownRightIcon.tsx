import * as React from 'react';

export interface ArrowDownRightIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ArrowDownRightIcon = React.forwardRef<SVGSVGElement, ArrowDownRightIconProps>(
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
      <path d="M8.549 16.9493L16.9498 16.9493L16.9497 8.42731M16.9498 16.9493L7.05029 7.0498" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ArrowDownRightIcon.displayName = 'ArrowDownRightIcon';

export { ArrowDownRightIcon };
export default ArrowDownRightIcon;
