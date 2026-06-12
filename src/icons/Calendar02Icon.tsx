import * as React from 'react';

export interface Calendar02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Calendar02Icon = React.forwardRef<SVGSVGElement, Calendar02IconProps>(
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
      <path d="M7.75 17.2202V17.1428M12.25 17.2202V17.1428M12.25 13.0286V12.9512M16.25 13.0286V12.9512M4.75 8.91425H18.75M6.55952 3V4.54304M16.75 3V4.54285M16.75 4.54285H6.75C5.09315 4.54285 3.75 5.92436 3.75 7.62855V17.9143C3.75 19.6185 5.09315 21 6.75 21H16.75C18.4069 21 19.75 19.6185 19.75 17.9143L19.75 7.62855C19.75 5.92436 18.4069 4.54285 16.75 4.54285Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Calendar02Icon.displayName = 'Calendar02Icon';

export { Calendar02Icon };
export default Calendar02Icon;
