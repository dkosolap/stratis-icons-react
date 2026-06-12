import * as React from 'react';

export interface Check01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Check01Icon = React.forwardRef<SVGSVGElement, Check01IconProps>(
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
      <path d="M16.8 8.3999L9.64043 15.5999L7.19995 13.1456" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Check01Icon.displayName = 'Check01Icon';

export { Check01Icon };
export default Check01Icon;
