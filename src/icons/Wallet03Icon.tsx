import * as React from 'react';

export interface Wallet03IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Wallet03Icon = React.forwardRef<SVGSVGElement, Wallet03IconProps>(
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
      <path d="M2.39771 7.54004L2.40239 19.9C2.40239 21.3139 3.54854 22.46 4.96239 22.46H19.0424C20.4562 22.46 21.6024 21.3139 21.6024 19.9V9.66004C21.6024 8.48183 20.6473 7.52671 19.4691 7.52671H2.41653C2.40806 7.52671 2.40051 7.53205 2.39771 7.54004ZM2.39771 7.54004C2.39849 7.30041 16.8024 1.54004 16.8024 1.54004V6.94004M16.4991 14.7633L16.4824 14.78" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Wallet03Icon.displayName = 'Wallet03Icon';

export { Wallet03Icon };
export default Wallet03Icon;
