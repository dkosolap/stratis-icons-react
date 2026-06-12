import * as React from 'react';

export interface ShieldCheckIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ShieldCheckIcon = React.forwardRef<SVGSVGElement, ShieldCheckIconProps>(
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
      <path d="M9.60005 11.1875L11.4 12.9875L15.0001 9.38754M4.80005 5.78754L10.3901 2.99252C11.4036 2.48577 12.5965 2.48577 13.61 2.99252L19.2001 5.78754C19.2001 5.78754 19.2001 11.0435 19.2001 13.8155C19.2001 16.5875 16.6377 18.4587 12 21.3875C7.36245 18.4587 4.80005 15.9875 4.80005 13.8155V5.78754Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ShieldCheckIcon.displayName = 'ShieldCheckIcon';

export { ShieldCheckIcon };
export default ShieldCheckIcon;
