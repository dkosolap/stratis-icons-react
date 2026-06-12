import * as React from 'react';

export interface Bold01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Bold01Icon = React.forwardRef<SVGSVGElement, Bold01IconProps>(
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
      <path d="M6 12V20H14.1C16.2539 20 18 18.2091 18 16C18 13.7909 16.2539 12 14.1 12H6ZM6 12H12.9C15.0539 12 16.8 10.2091 16.8 8C16.8 5.79086 15.0539 4 12.9 4H6V12Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Bold01Icon.displayName = 'Bold01Icon';

export { Bold01Icon };
export default Bold01Icon;
