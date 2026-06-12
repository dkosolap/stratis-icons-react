import * as React from 'react';

export interface CheckSquareBrokenIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const CheckSquareBrokenIcon = React.forwardRef<SVGSVGElement, CheckSquareBrokenIconProps>(
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
      <path d="M14.25 3H6.375C4.51104 3 3 4.51103 3 6.37498V17.625C3 19.489 4.51104 21 6.375 21H17.625C19.489 21 21 19.489 21 17.625V11.4375M19.875 5.81248L12 13.6874L9.75 11.4375" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

CheckSquareBrokenIcon.displayName = 'CheckSquareBrokenIcon';

export { CheckSquareBrokenIcon };
export default CheckSquareBrokenIcon;
