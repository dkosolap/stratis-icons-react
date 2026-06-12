import * as React from 'react';

export interface Alarm06IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Alarm06Icon = React.forwardRef<SVGSVGElement, Alarm06IconProps>(
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
      <path d="M5.85605 18.9124L3.16805 21.6004M20.832 21.6004L18.144 18.9124L3.30005 3.90039L1.80005 5.40039M22.2 5.40039L19.2 2.40039M9.60005 4.66616C10.3608 4.44116 11.1663 4.32039 12 4.32039C16.6658 4.32039 20.448 8.10269 20.448 12.7684C20.448 13.541 20.3443 14.2894 20.1501 15.0004M17.4 19.2655C15.9359 20.4837 14.0536 21.2164 12 21.2164C7.33435 21.2164 3.55205 17.4341 3.55205 12.7684C3.55205 10.6354 4.34251 8.68713 5.64647 7.20039" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Alarm06Icon.displayName = 'Alarm06Icon';

export { Alarm06Icon };
export default Alarm06Icon;
