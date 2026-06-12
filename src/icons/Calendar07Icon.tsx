import * as React from 'react';

export interface Calendar07IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Calendar07Icon = React.forwardRef<SVGSVGElement, Calendar07IconProps>(
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
      <path d="M7.14286 7.90176H16.7812M6.48512 2.4375V4.07698M17.3125 2.4375V4.07678M20.5 7.07678L20.5 18.5625C20.5 20.2194 19.1569 21.5625 17.5 21.5625H6.5C4.84315 21.5625 3.5 20.2194 3.5 18.5625V7.07678C3.5 5.41992 4.84315 4.07678 6.5 4.07678H17.5C19.1569 4.07678 20.5 5.41992 20.5 7.07678Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Calendar07Icon.displayName = 'Calendar07Icon';

export { Calendar07Icon };
export default Calendar07Icon;
