import * as React from 'react';

export interface CheckSquareContainedIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const CheckSquareContainedIcon = React.forwardRef<SVGSVGElement, CheckSquareContainedIconProps>(
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
      <path d="M15 9.99997L10.5253 13.9999L9 12.6365M20 6.99998L20 17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V6.99998C4 5.34314 5.34315 4 7 4H17C18.6569 4 20 5.34314 20 6.99998Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

CheckSquareContainedIcon.displayName = 'CheckSquareContainedIcon';

export { CheckSquareContainedIcon };
export default CheckSquareContainedIcon;
