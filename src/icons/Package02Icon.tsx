import * as React from 'react';

export interface Package02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Package02Icon = React.forwardRef<SVGSVGElement, Package02IconProps>(
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
      <path d="M12 16.0954V12.5997M12 12.5997L7.79998 10.1997M12 12.5997L16.2 10.1997M11.9999 2.3999L20.3137 7.1999V16.7999L11.9999 21.5999L3.68604 16.7999V7.1999L11.9999 2.3999Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Package02Icon.displayName = 'Package02Icon';

export { Package02Icon };
export default Package02Icon;
