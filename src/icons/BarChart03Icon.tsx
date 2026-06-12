import * as React from 'react';

export interface BarChart03IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BarChart03Icon = React.forwardRef<SVGSVGElement, BarChart03IconProps>(
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
      <path d="M2.3999 21.5999V19.4666M8.7999 21.5999V14.1332M15.1999 21.5999V8.7999M21.5999 21.5999V2.3999" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

BarChart03Icon.displayName = 'BarChart03Icon';

export { BarChart03Icon };
export default BarChart03Icon;
