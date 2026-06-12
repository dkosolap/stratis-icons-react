import * as React from 'react';

export interface PackageXIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const PackageXIcon = React.forwardRef<SVGSVGElement, PackageXIconProps>(
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
      <path d="M20.1619 11.9999V7.1999L11.848 2.3999L3.53418 7.1999V16.7999L11.848 21.5999L13.6475 20.561M20.1619 7.1999L11.848 12.5999M11.848 21.5999V12.5999M11.848 12.5999L4.04802 7.7999M15.448 9.5999L7.64802 4.7999M16.647 15.381L18.5565 17.2905M18.5565 17.2905L20.4654 19.1994M18.5565 17.2905L20.4657 15.3813M18.5565 17.2905L16.6473 19.1997" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

PackageXIcon.displayName = 'PackageXIcon';

export { PackageXIcon };
export default PackageXIcon;
