import * as React from 'react';

export interface Calendar05IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Calendar05Icon = React.forwardRef<SVGSVGElement, Calendar05IconProps>(
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
      <path d="M14.9514 16.25L17.3125 13.5938L14.9514 10.9375M17.3125 13.5938H7.75M7.75 7.21927H16.6042M20.5 6.6875V17.3125C20.5 19.0729 19.0729 20.5 17.3125 20.5H6.6875C4.92709 20.5 3.5 19.0729 3.5 17.3125V6.6875C3.5 4.92709 4.92709 3.5 6.6875 3.5H17.3125C19.0729 3.5 20.5 4.92709 20.5 6.6875Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Calendar05Icon.displayName = 'Calendar05Icon';

export { Calendar05Icon };
export default Calendar05Icon;
