import * as React from 'react';

export interface Package01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Package01Icon = React.forwardRef<SVGSVGElement, Package01IconProps>(
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
      <path d="M11.9999 21.5999L20.3137 16.7999V7.1999L11.9999 2.3999L3.68604 7.1999V16.7999L11.9999 21.5999ZM11.9999 21.5999V12.5999M11.9999 12.5999L4.19988 7.7999M11.9999 12.5999L19.7999 7.7999" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Package01Icon.displayName = 'Package01Icon';

export { Package01Icon };
export default Package01Icon;
