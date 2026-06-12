import * as React from 'react';

export interface Cursor05IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Cursor05Icon = React.forwardRef<SVGSVGElement, Cursor05IconProps>(
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
      <path d="M5.61917 12.4369L4.34103 13.715M4.20747 9.02807H2.3999M4.34103 4.34196L5.61917 5.6201M9.02797 2.40039V4.20796M13.7141 4.34196L12.4359 5.6201M16.0175 15.9959L20.6198 14.3893C21.4824 14.0882 21.5158 12.8802 20.6708 12.5448L10.1413 8.87793C9.34974 8.56381 8.55383 9.34026 8.84805 10.1395L12.2959 20.9622C12.6099 21.8151 13.8173 21.8124 14.1404 20.9581L16.0175 15.9959Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Cursor05Icon.displayName = 'Cursor05Icon';

export { Cursor05Icon };
export default Cursor05Icon;
