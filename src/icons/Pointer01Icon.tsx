import * as React from 'react';

export interface Pointer01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Pointer01Icon = React.forwardRef<SVGSVGElement, Pointer01IconProps>(
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
      <path d="M10.2631 14.0019L12.4968 20.4627C12.9155 21.6737 14.6134 21.7142 15.0893 20.5245L21.4975 4.50638C21.9433 3.39205 20.8561 2.2774 19.731 2.69527L3.30186 8.79714C2.10127 9.24304 2.0986 10.9402 3.29777 11.3899L10.2631 14.0019Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Pointer01Icon.displayName = 'Pointer01Icon';

export { Pointer01Icon };
export default Pointer01Icon;
