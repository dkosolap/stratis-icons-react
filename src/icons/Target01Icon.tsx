import * as React from 'react';

export interface Target01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Target01Icon = React.forwardRef<SVGSVGElement, Target01IconProps>(
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
      <path d="M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12H17.625M12 21C7.02944 21 3 16.9706 3 12M12 21V17.625M3 12C3 7.02944 7.02944 3 12 3M3 12H6.375M12 3V6.375" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

Target01Icon.displayName = 'Target01Icon';

export { Target01Icon };
export default Target01Icon;
