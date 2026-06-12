import * as React from 'react';

export interface Stop02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Stop02Icon = React.forwardRef<SVGSVGElement, Stop02IconProps>(
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
      <path d="M17.625 3H6.375C4.51104 3 3 4.51104 3 6.375V17.625C3 19.489 4.51104 21 6.375 21H17.625C19.489 21 21 19.489 21 17.625V6.375C21 4.51104 19.489 3 17.625 3Z" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
<path d="M8.625 9.89062C8.625 9.19164 9.19164 8.625 9.89062 8.625H14.1094C14.8084 8.625 15.375 9.19164 15.375 9.89062V14.1094C15.375 14.8084 14.8084 15.375 14.1094 15.375H9.89062C9.19164 15.375 8.625 14.8084 8.625 14.1094V9.89062Z" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  )
);

Stop02Icon.displayName = 'Stop02Icon';

export { Stop02Icon };
export default Stop02Icon;
