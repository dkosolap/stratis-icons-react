import * as React from 'react';

export interface PackageMinusIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const PackageMinusIcon = React.forwardRef<SVGSVGElement, PackageMinusIconProps>(
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
      <path d="M19.6707 11.9999V7.1999L11.3568 2.3999L3.04297 7.1999V16.7999L11.3568 21.5999L13.1563 20.561M19.6707 7.1999L11.3568 12.5999M11.3568 21.5999V12.5999M11.3568 12.5999L3.55681 7.7999M14.9568 9.5999L7.15681 4.7999M15.5568 16.7999H20.9568" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

PackageMinusIcon.displayName = 'PackageMinusIcon';

export { PackageMinusIcon };
export default PackageMinusIcon;
