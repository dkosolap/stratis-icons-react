import * as React from 'react';

export interface Scissors04IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Scissors04Icon = React.forwardRef<SVGSVGElement, Scissors04IconProps>(
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
      <path d="M8.5799 8.58039L21.5999 19.2004M21.5999 4.80039L8.5799 15.4204M5.9999 9.60039C4.01168 9.60039 2.3999 7.98862 2.3999 6.00039C2.3999 4.01217 4.01168 2.40039 5.9999 2.40039C7.98813 2.40039 9.5999 4.01217 9.5999 6.00039C9.5999 7.98862 7.98813 9.60039 5.9999 9.60039ZM5.9999 21.6004C4.01168 21.6004 2.3999 19.9886 2.3999 18.0004C2.3999 16.0122 4.01168 14.4004 5.9999 14.4004C7.98813 14.4004 9.5999 16.0122 9.5999 18.0004C9.5999 19.9886 7.98813 21.6004 5.9999 21.6004Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Scissors04Icon.displayName = 'Scissors04Icon';

export { Scissors04Icon };
export default Scissors04Icon;
