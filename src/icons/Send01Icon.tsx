import * as React from 'react';

export interface Send01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Send01Icon = React.forwardRef<SVGSVGElement, Send01IconProps>(
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
      <path d="M21.0703 2.92998L10.4063 13.5939M3.271 8.23566L19.8769 2.47443C20.8995 2.11964 21.8807 3.10076 21.5259 4.1234L15.7646 20.7293C15.37 21.8669 13.7725 21.8981 13.3337 20.7768L10.6968 14.038C10.5651 13.7015 10.2988 13.4352 9.96226 13.3035L3.22354 10.6666C2.10219 10.2278 2.13338 8.63034 3.271 8.23566Z" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

Send01Icon.displayName = 'Send01Icon';

export { Send01Icon };
export default Send01Icon;
