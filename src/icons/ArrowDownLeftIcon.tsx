import * as React from 'react';

export interface ArrowDownLeftIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ArrowDownLeftIcon = React.forwardRef<SVGSVGElement, ArrowDownLeftIconProps>(
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
      <path d="M14.8281 15.0864L9.51406 20.4004L4.20005 15.0864M9.51406 20.4004L9.51406 7.60039C9.51406 5.39126 11.3049 3.60039 13.5141 3.60039L19.8 3.60039" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ArrowDownLeftIcon.displayName = 'ArrowDownLeftIcon';

export { ArrowDownLeftIcon };
export default ArrowDownLeftIcon;
