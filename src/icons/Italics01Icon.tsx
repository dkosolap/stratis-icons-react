import * as React from 'react';

export interface Italics01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Italics01Icon = React.forwardRef<SVGSVGElement, Italics01IconProps>(
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
      <path d="M10.5526 19L14.4474 5M10.5526 19H6.5M10.5526 19H14.6052M14.4474 5H10.3948M14.4474 5H18.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Italics01Icon.displayName = 'Italics01Icon';

export { Italics01Icon };
export default Italics01Icon;
