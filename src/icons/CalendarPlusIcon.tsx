import * as React from 'react';

export interface CalendarPlusIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const CalendarPlusIcon = React.forwardRef<SVGSVGElement, CalendarPlusIconProps>(
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
      <path d="M5.5 8.91425H19.5M7.30952 3V4.54304M17.5 3V4.54285M17.5 4.54285H7.5C5.84315 4.54285 4.5 5.92436 4.5 7.62855V17.9143C4.5 19.6185 5.84315 21 7.5 21H17.5C19.1569 21 20.5 19.6185 20.5 17.9143L20.5 7.62855C20.5 5.92436 19.1569 4.54285 17.5 4.54285ZM12.5 12V14.5714M12.5 14.5714V17.1428M12.5 14.5714H15M12.5 14.5714H10" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

CalendarPlusIcon.displayName = 'CalendarPlusIcon';

export { CalendarPlusIcon };
export default CalendarPlusIcon;
