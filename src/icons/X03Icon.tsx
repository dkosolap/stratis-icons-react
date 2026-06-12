import * as React from 'react';

export interface X03IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const X03Icon = React.forwardRef<SVGSVGElement, X03IconProps>(
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
      <path d="M16 8L8 16M16 16L8 8" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

X03Icon.displayName = 'X03Icon';

export { X03Icon };
export default X03Icon;
