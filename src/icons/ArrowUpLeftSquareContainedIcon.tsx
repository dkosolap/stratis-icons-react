import * as React from 'react';

export interface ArrowUpLeftSquareContainedIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ArrowUpLeftSquareContainedIcon = React.forwardRef<SVGSVGElement, ArrowUpLeftSquareContainedIconProps>(
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
      <path d="M14.3433 8.75758H8.71829V14.3826M8.71829 8.75758L14.8121 14.8514M17.625 21L6.37498 21C4.51103 21 3 19.489 3 17.625L3 6.375C3 4.51104 4.51103 3 6.37498 3L17.625 3C19.489 3 21 4.51104 21 6.375V17.625C21 19.489 19.489 21 17.625 21Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ArrowUpLeftSquareContainedIcon.displayName = 'ArrowUpLeftSquareContainedIcon';

export { ArrowUpLeftSquareContainedIcon };
export default ArrowUpLeftSquareContainedIcon;
