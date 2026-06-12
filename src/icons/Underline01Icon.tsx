import * as React from 'react';

export interface Underline01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Underline01Icon = React.forwardRef<SVGSVGElement, Underline01IconProps>(
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
      <path d="M20 20H4M17.7143 5.14286V10.8571C17.7143 14.0131 15.1559 16.5714 12 16.5714C8.84409 16.5714 6.28571 14.0131 6.28571 10.8571V5.14286M4.57143 4H8M16 4L19.4286 4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Underline01Icon.displayName = 'Underline01Icon';

export { Underline01Icon };
export default Underline01Icon;
