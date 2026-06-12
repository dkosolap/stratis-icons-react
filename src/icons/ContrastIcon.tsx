import * as React from 'react';

export interface ContrastIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ContrastIcon = React.forwardRef<SVGSVGElement, ContrastIconProps>(
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
      <path d="M2.3999 12.0004C2.3999 6.69846 6.69797 2.40039 11.9999 2.40039C17.3018 2.40039 21.5999 6.69846 21.5999 12.0004C21.5999 17.3023 17.3018 21.6004 11.9999 21.6004C6.69797 21.6004 2.3999 17.3023 2.3999 12.0004Z" stroke={color} strokeWidth="2"/>
<path d="M17.9999 12.5004V11.5004C17.9999 8.46282 15.5375 6.00039 12.4999 6.00039C12.2238 6.00039 11.9999 6.22425 11.9999 6.50039V17.5004C11.9999 17.7765 12.2238 18.0004 12.4999 18.0004C15.5375 18.0004 17.9999 15.538 17.9999 12.5004Z" stroke={color} strokeWidth="2"/>
    </svg>
  )
);

ContrastIcon.displayName = 'ContrastIcon';

export { ContrastIcon };
export default ContrastIcon;
