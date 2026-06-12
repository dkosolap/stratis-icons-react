import * as React from 'react';

export interface Underline02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Underline02Icon = React.forwardRef<SVGSVGElement, Underline02IconProps>(
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
      <path d="M17.0341 16.8005H7.80049M15.2982 6.60496V9.90267C15.2982 11.7239 13.8218 13.2004 12.0005 13.2004C10.1792 13.2004 8.70277 11.7239 8.70277 9.90267V6.60496M4.7999 21.6004H19.1999C20.5254 21.6004 21.5999 20.5259 21.5999 19.2004V4.80039C21.5999 3.47491 20.5254 2.40039 19.1999 2.40039H4.7999C3.47442 2.40039 2.3999 3.47491 2.3999 4.80039V19.2004C2.3999 20.5259 3.47442 21.6004 4.7999 21.6004Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Underline02Icon.displayName = 'Underline02Icon';

export { Underline02Icon };
export default Underline02Icon;
