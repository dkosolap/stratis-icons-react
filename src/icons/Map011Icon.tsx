import * as React from 'react';

export interface Map011IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Map011Icon = React.forwardRef<SVGSVGElement, Map011IconProps>(
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
      <path d="M8.625 16.0476V10.0238M14.8125 13.8571V7.83333M3 17.7143V4L8.47826 6.28571L14.7391 4L21 6.28571V20L14.7391 17.7143L8.47826 20L3 17.7143Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Map011Icon.displayName = 'Map011Icon';

export { Map011Icon };
export default Map011Icon;
