import * as React from 'react';

export interface Crop02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Crop02Icon = React.forwardRef<SVGSVGElement, Crop02IconProps>(
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
      <path d="M2.3999 6.60861H6.87113M6.87113 6.60861V2.40039M6.87113 6.60861V15.5511C6.87113 16.1321 7.34216 16.6031 7.92319 16.6031H17.6547M6.87113 6.60861L16.6026 6.54726C17.1837 6.54726 17.6547 7.01828 17.6547 7.59932V16.6031M17.6547 16.6031H21.5999M17.6547 16.6031V21.8634" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Crop02Icon.displayName = 'Crop02Icon';

export { Crop02Icon };
export default Crop02Icon;
