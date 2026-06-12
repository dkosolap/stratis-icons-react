import * as React from 'react';

export interface CurrencyBathIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const CurrencyBathIcon = React.forwardRef<SVGSVGElement, CurrencyBathIconProps>(
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
      <path d="M11 4V6M11 18V20M8 6H13C13.7956 6 14.5587 6.31607 15.1213 6.87868C15.6839 7.44129 16 8.20435 16 9V9.143C16 9.90072 15.699 10.6274 15.1632 11.1632C14.6274 11.699 13.9007 12 13.143 12H8H13C13.7956 12 14.5587 12.3161 15.1213 12.8787C15.6839 13.4413 16 14.2044 16 15V15.143C16 15.9007 15.699 16.6274 15.1632 17.1632C14.6274 17.699 13.9007 18 13.143 18H8V6Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

CurrencyBathIcon.displayName = 'CurrencyBathIcon';

export { CurrencyBathIcon };
export default CurrencyBathIcon;
