import * as React from 'react';

export interface Scissors03IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Scissors03Icon = React.forwardRef<SVGSVGElement, Scissors03IconProps>(
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
      <path d="M4.80015 9.39554L21.6001 16.8004M21.6001 7.20039L4.80015 14.6052M6.00015 9.60039C4.01192 9.60039 2.40015 7.98862 2.40015 6.00039C2.40015 4.01217 4.01192 2.40039 6.00015 2.40039C7.98837 2.40039 9.60015 4.01217 9.60015 6.00039C9.60015 7.98862 7.98837 9.60039 6.00015 9.60039ZM6.00015 21.6004C4.01192 21.6004 2.40015 19.9886 2.40015 18.0004C2.40015 16.0122 4.01192 14.4004 6.00015 14.4004C7.98837 14.4004 9.60015 16.0122 9.60015 18.0004C9.60015 19.9886 7.98837 21.6004 6.00015 21.6004Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Scissors03Icon.displayName = 'Scissors03Icon';

export { Scissors03Icon };
export default Scissors03Icon;
