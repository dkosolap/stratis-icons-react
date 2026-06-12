import * as React from 'react';

export interface CurrencyRubelIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const CurrencyRubelIcon = React.forwardRef<SVGSVGElement, CurrencyRubelIconProps>(
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
      <path d="M8.5 19V5H14.5C15.2956 5 16.0587 5.31607 16.6213 5.87868C17.1839 6.44129 17.5 7.20435 17.5 8C17.5 8.79565 17.1839 9.55871 16.6213 10.1213C16.0587 10.6839 15.2956 11 14.5 11H6.5M14.5 15H6.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

CurrencyRubelIcon.displayName = 'CurrencyRubelIcon';

export { CurrencyRubelIcon };
export default CurrencyRubelIcon;
