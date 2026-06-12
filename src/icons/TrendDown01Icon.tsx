import * as React from 'react';

export interface TrendDown01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const TrendDown01Icon = React.forwardRef<SVGSVGElement, TrendDown01IconProps>(
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
      <path d="M2.3999 7.19981L7.7759 12.369L12.3839 7.93827L21.5999 16.7998M21.5999 10.1537V16.7998H14.6879" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

TrendDown01Icon.displayName = 'TrendDown01Icon';

export { TrendDown01Icon };
export default TrendDown01Icon;
