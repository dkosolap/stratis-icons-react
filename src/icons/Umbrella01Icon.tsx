import * as React from 'react';

export interface Umbrella01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Umbrella01Icon = React.forwardRef<SVGSVGElement, Umbrella01IconProps>(
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
      <path d="M11.1999 13.2V18.4C11.1999 19.9464 12.4535 21.2 13.9999 21.2C15.5463 21.2 16.7999 19.9464 16.7999 18.4V18M21.5999 12.4H2.3999C2.3999 7.09811 6.69797 2.80005 11.9999 2.80005C17.3018 2.80005 21.5999 7.09811 21.5999 12.4Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Umbrella01Icon.displayName = 'Umbrella01Icon';

export { Umbrella01Icon };
export default Umbrella01Icon;
