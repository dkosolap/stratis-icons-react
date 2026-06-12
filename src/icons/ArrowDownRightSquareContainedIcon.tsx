import * as React from 'react';

export interface ArrowDownRightSquareContainedIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ArrowDownRightSquareContainedIcon = React.forwardRef<SVGSVGElement, ArrowDownRightSquareContainedIconProps>(
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
      <path d="M9.65621 15.3202H15.2812V9.69518M15.2812 15.3202L9.18745 9.22643M17.625 21L6.37498 21C4.51103 21 3 19.489 3 17.625L3 6.375C3 4.51104 4.51103 3 6.37498 3L17.625 3C19.489 3 21 4.51104 21 6.375V17.625C21 19.489 19.489 21 17.625 21Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ArrowDownRightSquareContainedIcon.displayName = 'ArrowDownRightSquareContainedIcon';

export { ArrowDownRightSquareContainedIcon };
export default ArrowDownRightSquareContainedIcon;
