import * as React from 'react';

export interface BankIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BankIcon = React.forwardRef<SVGSVGElement, BankIconProps>(
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
      <path d="M3.9999 14.9999V12.3312M9.33323 14.9999V12.3312M14.6666 14.9999V12.3312M19.9999 14.9999V12.3312M2.3999 18.3999H21.5999V21.5999H2.3999V18.3999ZM2.3999 8.7999V6.66657L11.6054 2.3999L21.5999 6.66657V8.7999H2.3999Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

BankIcon.displayName = 'BankIcon';

export { BankIcon };
export default BankIcon;
