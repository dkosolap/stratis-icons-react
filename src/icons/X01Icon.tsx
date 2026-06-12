import * as React from 'react';

export interface X01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const X01Icon = React.forwardRef<SVGSVGElement, X01IconProps>(
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
      <path d="M20 4L4 20M20 20L4 4" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

X01Icon.displayName = 'X01Icon';

export { X01Icon };
export default X01Icon;
