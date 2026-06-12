import * as React from 'react';

export interface CurrencyYenIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const CurrencyYenIcon = React.forwardRef<SVGSVGElement, CurrencyYenIconProps>(
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
      <path d="M12 19V12M12 12L7 5M12 12L17 5M8 17H16M8 13H16" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

CurrencyYenIcon.displayName = 'CurrencyYenIcon';

export { CurrencyYenIcon };
export default CurrencyYenIcon;
