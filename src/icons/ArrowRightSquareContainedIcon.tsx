import * as React from 'react';

export interface ArrowRightSquareContainedIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ArrowRightSquareContainedIcon = React.forwardRef<SVGSVGElement, ArrowRightSquareContainedIconProps>(
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
      <path d="M12.6239 15.9775L16.4999 12L12.6239 8.02252M16.4999 12H7.98347M3 17.625L3 6.37498C3 4.51103 4.51103 3 6.37498 3L17.6249 3C19.4889 3 20.9999 4.51103 20.9999 6.37498V17.625C20.9999 19.489 19.4889 21 17.6249 21H6.37498C4.51103 21 3 19.489 3 17.625Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ArrowRightSquareContainedIcon.displayName = 'ArrowRightSquareContainedIcon';

export { ArrowRightSquareContainedIcon };
export default ArrowRightSquareContainedIcon;
