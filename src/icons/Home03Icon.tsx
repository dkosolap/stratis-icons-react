import * as React from 'react';

export interface Home03IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Home03Icon = React.forwardRef<SVGSVGElement, Home03IconProps>(
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
      <path d="M3 9.41605C3 9.04665 3.18802 8.7001 3.50457 8.48603L11.3046 3.21117C11.7209 2.92961 12.2791 2.92961 12.6954 3.21117L20.4954 8.48603C20.812 8.70011 21 9.04665 21 9.41605V19.2882C21 20.2336 20.1941 21 19.2 21H4.8C3.80589 21 3 20.2336 3 19.2882V9.41605Z" stroke={color} strokeWidth="2"/>
    </svg>
  )
);

Home03Icon.displayName = 'Home03Icon';

export { Home03Icon };
export default Home03Icon;
