import * as React from 'react';

export interface UserProfile03IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const UserProfile03Icon = React.forwardRef<SVGSVGElement, UserProfile03IconProps>(
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
      <path d="M3.23779 19.5C4.5632 17.2892 7.46807 15.7762 12.0001 15.7762C16.5321 15.7762 19.4369 17.2892 20.7623 19.5M15.6001 8.1C15.6001 10.0882 13.9883 11.7 12.0001 11.7C10.0118 11.7 8.40007 10.0882 8.40007 8.1C8.40007 6.11177 10.0118 4.5 12.0001 4.5C13.9883 4.5 15.6001 6.11177 15.6001 8.1Z" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

UserProfile03Icon.displayName = 'UserProfile03Icon';

export { UserProfile03Icon };
export default UserProfile03Icon;
