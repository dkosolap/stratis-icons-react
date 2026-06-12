import * as React from 'react';

export interface ReceiptLinesIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ReceiptLinesIcon = React.forwardRef<SVGSVGElement, ReceiptLinesIconProps>(
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
      <path d="M7.79995 7.8H16.2M7.79995 12.6H16.2M5.75995 3H18.24C19.1015 3 19.8 3.80589 19.8 4.8V21L17.2 19.2L14.6 21L12 19.2L9.39995 21L6.79995 19.2L4.19995 21V4.8C4.19995 3.80589 4.89839 3 5.75995 3Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ReceiptLinesIcon.displayName = 'ReceiptLinesIcon';

export { ReceiptLinesIcon };
export default ReceiptLinesIcon;
