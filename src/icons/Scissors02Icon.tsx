import * as React from 'react';

export interface Scissors02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Scissors02Icon = React.forwardRef<SVGSVGElement, Scissors02IconProps>(
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
      <g clipPath="url(#clip0_101_5243)">
<path d="M3.59995 9.39554L20.4 16.8004M20.4 7.20039L3.59995 14.6052M17.4003 12.0007L17.3768 12.0242M22.2238 12.0007L22.2003 12.0242M4.79995 9.60039C2.81173 9.60039 1.19995 7.98862 1.19995 6.00039C1.19995 4.01217 2.81173 2.40039 4.79995 2.40039C6.78818 2.40039 8.39995 4.01217 8.39995 6.00039C8.39995 7.98862 6.78818 9.60039 4.79995 9.60039ZM4.79995 21.6004C2.81173 21.6004 1.19995 19.9886 1.19995 18.0004C1.19995 16.0122 2.81173 14.4004 4.79995 14.4004C6.78818 14.4004 8.39995 16.0122 8.39995 18.0004C8.39995 19.9886 6.78818 21.6004 4.79995 21.6004Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_101_5243">
<rect width="24" height="24" fill={color} transform="translate(24 1.04907e-06) rotate(90)"/>
</clipPath>
</defs>
    </svg>
  )
);

Scissors02Icon.displayName = 'Scissors02Icon';

export { Scissors02Icon };
export default Scissors02Icon;
