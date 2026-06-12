import * as React from 'react';

export interface Logout01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Logout01Icon = React.forwardRef<SVGSVGElement, Logout01IconProps>(
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
      <path d="M15.2199 20.3999L18.9258 20.3999C19.4874 20.3999 20.0261 20.1787 20.4232 19.7848C20.8203 19.391 21.0435 18.8569 21.0435 18.2999L21.0435 5.6999C21.0435 5.14295 20.8203 4.60881 20.4232 4.21498C20.0261 3.82115 19.4874 3.5999 18.9258 3.5999L15.2199 3.5999M14.9567 11.9999L2.95674 11.9999M7.54189 7.1999L2.95674 11.9999L7.54189 16.7999" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Logout01Icon.displayName = 'Logout01Icon';

export { Logout01Icon };
export default Logout01Icon;
