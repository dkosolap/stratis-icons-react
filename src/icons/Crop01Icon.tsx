import * as React from 'react';

export interface Crop01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Crop01Icon = React.forwardRef<SVGSVGElement, Crop01IconProps>(
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
      <path d="M2.3999 6.60861H6.87113M6.87113 2.40039V15.5511C6.87113 16.1321 7.34216 16.6031 7.92319 16.6031H21.5999M17.6547 21.8634V16.8661M17.3917 13.447V7.66066C17.3917 7.07963 16.9207 6.60861 16.3396 6.60861H10.8163" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Crop01Icon.displayName = 'Crop01Icon';

export { Crop01Icon };
export default Crop01Icon;
