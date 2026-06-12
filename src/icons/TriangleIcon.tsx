import * as React from 'react';

export interface TriangleIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const TriangleIcon = React.forwardRef<SVGSVGElement, TriangleIconProps>(
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
      <path d="M11.9999 3.59961L21.5999 20.3996H2.3999L11.9999 3.59961Z" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  )
);

TriangleIcon.displayName = 'TriangleIcon';

export { TriangleIcon };
export default TriangleIcon;
