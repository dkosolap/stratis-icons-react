import * as React from 'react';

export interface Loader02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Loader02Icon = React.forwardRef<SVGSVGElement, Loader02IconProps>(
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
      <path d="M13.3501 5.7001V2.1001M13.3501 21.9001V17.1001M19.0501 11.4001H21.1501M2.8501 11.4001H7.6501M17.381 7.3698L19.0507 5.7001M5.92474 18.8249L9.31885 15.4308M17.381 15.4304L19.0501 17.0995M5.92474 3.97532L9.31885 7.36943" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Loader02Icon.displayName = 'Loader02Icon';

export { Loader02Icon };
export default Loader02Icon;
