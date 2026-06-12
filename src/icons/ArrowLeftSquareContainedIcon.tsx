import * as React from 'react';

export interface ArrowLeftSquareContainedIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ArrowLeftSquareContainedIcon = React.forwardRef<SVGSVGElement, ArrowLeftSquareContainedIconProps>(
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
      <path d="M11.376 8.02252L7.49997 12L11.376 15.9775M7.49997 12H16.0164M20.9999 6.37498L20.9999 17.625C20.9999 19.489 19.4889 21 17.6249 21H6.37498C4.51103 21 3 19.489 3 17.625V6.37498C3 4.51103 4.51103 3 6.37498 3H17.6249C19.4889 3 20.9999 4.51103 20.9999 6.37498Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ArrowLeftSquareContainedIcon.displayName = 'ArrowLeftSquareContainedIcon';

export { ArrowLeftSquareContainedIcon };
export default ArrowLeftSquareContainedIcon;
