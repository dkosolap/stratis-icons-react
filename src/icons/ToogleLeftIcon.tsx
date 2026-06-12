import * as React from 'react';

export interface ToogleLeftIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ToogleLeftIcon = React.forwardRef<SVGSVGElement, ToogleLeftIconProps>(
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
      <path d="M7.75 7.75L16.25 7.75C18.5972 7.75 20.5 9.65279 20.5 12C20.5 14.3472 18.5972 16.25 16.25 16.25L7.75 16.25M7.75 16.25C10.0972 16.25 12 14.3472 12 12C12 9.65279 10.0972 7.75 7.75 7.75C5.40279 7.75 3.5 9.65279 3.5 12C3.5 14.3472 5.40279 16.25 7.75 16.25Z" stroke={color} strokeWidth="2"/>
    </svg>
  )
);

ToogleLeftIcon.displayName = 'ToogleLeftIcon';

export { ToogleLeftIcon };
export default ToogleLeftIcon;
