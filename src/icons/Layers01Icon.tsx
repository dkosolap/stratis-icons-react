import * as React from 'react';

export interface Layers01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Layers01Icon = React.forwardRef<SVGSVGElement, Layers01IconProps>(
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
      <path d="M11.9999 6.92529L21.5999 11.9998L11.9999 17.0743L2.3999 11.9998L11.9999 6.92529Z" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  )
);

Layers01Icon.displayName = 'Layers01Icon';

export { Layers01Icon };
export default Layers01Icon;
