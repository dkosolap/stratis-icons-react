import * as React from 'react';

export interface Flip01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Flip01Icon = React.forwardRef<SVGSVGElement, Flip01IconProps>(
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
      <path d="M11.9999 19.1996V16.7996M11.9999 12.5996V10.1996M11.9999 5.99961V3.59961M2.40061 15.5996L2.3999 7.19961L8.3999 11.3996L2.40061 15.5996ZM21.5992 7.19961L21.5999 15.5996L15.5999 11.3996L21.5992 7.19961Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Flip01Icon.displayName = 'Flip01Icon';

export { Flip01Icon };
export default Flip01Icon;
