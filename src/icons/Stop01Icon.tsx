import * as React from 'react';

export interface Stop01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Stop01Icon = React.forwardRef<SVGSVGElement, Stop01IconProps>(
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
      <path d="M3 6.375C3 4.51104 4.51104 3 6.375 3H17.625C19.489 3 21 4.51104 21 6.375V17.625C21 19.489 19.489 21 17.625 21H6.375C4.51104 21 3 19.489 3 17.625V6.375Z" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  )
);

Stop01Icon.displayName = 'Stop01Icon';

export { Stop01Icon };
export default Stop01Icon;
