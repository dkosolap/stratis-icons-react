import * as React from 'react';

export interface Map03IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Map03Icon = React.forwardRef<SVGSVGElement, Map03IconProps>(
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
      <path d="M8.625 19.3333V6.28571M14.8125 17.1429V4.02679M3 17.7143V4L8.47826 6.28571L14.7391 4L21 6.28571V20L14.7391 17.7143L8.47826 20L3 17.7143Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Map03Icon.displayName = 'Map03Icon';

export { Map03Icon };
export default Map03Icon;
