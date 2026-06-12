import * as React from 'react';

export interface ArrowDownSquareContainedIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ArrowDownSquareContainedIcon = React.forwardRef<SVGSVGElement, ArrowDownSquareContainedIconProps>(
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
      <path d="M8.02255 12.6239L12 16.5L15.9776 12.6239M12 16.5L12 7.9835M6.375 3L17.6251 3C19.4891 3 21.0001 4.51104 21.0001 6.375L21.0001 17.625C21.0001 19.489 19.4891 21 17.6251 21L6.375 21C4.51104 21 3 19.489 3 17.625L3 6.375C3 4.51104 4.51104 3 6.375 3Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ArrowDownSquareContainedIcon.displayName = 'ArrowDownSquareContainedIcon';

export { ArrowDownSquareContainedIcon };
export default ArrowDownSquareContainedIcon;
