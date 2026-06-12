import * as React from 'react';

export interface Minimise01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Minimise01Icon = React.forwardRef<SVGSVGElement, Minimise01IconProps>(
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
      <path d="M2.3999 15.4558H6.2664C7.44456 15.4558 8.39964 16.3727 8.39964 17.5038V21.5999M8.3999 2.3999V6.49598C8.3999 7.62708 7.44482 8.54402 6.26666 8.54402H2.40017M21.5999 15.4558H17.7334C16.5552 15.4558 15.6002 16.3727 15.6002 17.5038V21.5999M15.5999 2.3999V6.49598C15.5999 7.62708 16.555 8.54402 17.7331 8.54402H21.5996" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

Minimise01Icon.displayName = 'Minimise01Icon';

export { Minimise01Icon };
export default Minimise01Icon;
