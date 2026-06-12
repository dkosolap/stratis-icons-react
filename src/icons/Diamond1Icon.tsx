import * as React from 'react';

export interface Diamond1IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Diamond1Icon = React.forwardRef<SVGSVGElement, Diamond1IconProps>(
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
      <path d="M11.9999 2.40039L21.5999 12.0004L11.9999 21.6004L2.3999 12.0004L11.9999 2.40039Z" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  )
);

Diamond1Icon.displayName = 'Diamond1Icon';

export { Diamond1Icon };
export default Diamond1Icon;
