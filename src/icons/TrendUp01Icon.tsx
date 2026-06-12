import * as React from 'react';

export interface TrendUp01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const TrendUp01Icon = React.forwardRef<SVGSVGElement, TrendUp01IconProps>(
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
      <path d="M2.3999 16.8002L7.7759 11.631L12.3839 16.0617L21.5999 7.2002M21.5999 13.8463V7.2002H14.6879" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

TrendUp01Icon.displayName = 'TrendUp01Icon';

export { TrendUp01Icon };
export default TrendUp01Icon;
