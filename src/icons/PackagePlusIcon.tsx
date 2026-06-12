import * as React from 'react';

export interface PackagePlusIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const PackagePlusIcon = React.forwardRef<SVGSVGElement, PackagePlusIconProps>(
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
      <path d="M19.8213 11.9999V7.1999L11.5074 2.3999L3.1936 7.1999V16.7999L11.5074 21.5999L13.3069 20.561M19.8213 7.1999L11.5074 12.5999M11.5074 21.5999V12.5999M11.5074 12.5999L3.70745 7.7999M15.1074 9.5999L7.30745 4.7999M15.4064 17.6999H18.1068M18.1068 17.6999H20.8064M18.1068 17.6999L18.1068 14.9999M18.1068 17.6999V20.3999" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

PackagePlusIcon.displayName = 'PackagePlusIcon';

export { PackagePlusIcon };
export default PackagePlusIcon;
