import * as React from 'react';

export interface BarChart01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BarChart01Icon = React.forwardRef<SVGSVGElement, BarChart01IconProps>(
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
      <path d="M4.80005 19.2001V16.8001M12 19.2001V10.8M19.2001 19.2001V4.80005" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

BarChart01Icon.displayName = 'BarChart01Icon';

export { BarChart01Icon };
export default BarChart01Icon;
