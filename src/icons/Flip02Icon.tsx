import * as React from 'react';

export interface Flip02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Flip02Icon = React.forwardRef<SVGSVGElement, Flip02IconProps>(
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
      <path d="M11.9999 19.1996V16.7996M11.9999 12.5996V10.1996M11.9999 5.99961V3.59961M2.40061 15.5996L2.3999 7.19961H7.7999V15.5996H2.40061ZM21.5992 7.19961L21.5999 15.5996H16.1999V7.19961H21.5992Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Flip02Icon.displayName = 'Flip02Icon';

export { Flip02Icon };
export default Flip02Icon;
