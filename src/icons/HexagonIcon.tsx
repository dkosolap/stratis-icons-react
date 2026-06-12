import * as React from 'react';

export interface HexagonIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const HexagonIcon = React.forwardRef<SVGSVGElement, HexagonIconProps>(
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
      <path d="M12.0001 2.40039L20.4001 7.20039V16.8004L12.0001 21.6004L3.6001 16.8004V7.20039L12.0001 2.40039Z" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  )
);

HexagonIcon.displayName = 'HexagonIcon';

export { HexagonIcon };
export default HexagonIcon;
