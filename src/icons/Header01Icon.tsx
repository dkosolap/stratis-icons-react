import * as React from 'react';

export interface Header01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Header01Icon = React.forwardRef<SVGSVGElement, Header01IconProps>(
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
      <path d="M5.63111 20.215V11.9073M5.63111 20.215H2.86188M5.63111 20.215H8.40034M5.63111 11.9073V3.59961M5.63111 11.9073H18.0927M5.63111 3.59961H2.86188M5.63111 3.59961H8.40034M18.0927 11.9073V20.215M18.0927 11.9073V3.59961M18.0927 20.215H15.3234M18.0927 20.215H20.8619M18.0927 3.59961H15.3234M18.0927 3.59961H20.8619" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Header01Icon.displayName = 'Header01Icon';

export { Header01Icon };
export default Header01Icon;
