import * as React from 'react';

export interface UserProfile02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const UserProfile02Icon = React.forwardRef<SVGSVGElement, UserProfile02IconProps>(
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
      <path d="M2.3999 20.5123C2.3999 16.7368 5.55419 13.6761 11.9999 13.6761C18.4456 13.6761 21.5999 16.7368 21.5999 20.5123C21.5999 21.113 21.1617 21.5999 20.6211 21.5999H3.37873C2.83814 21.5999 2.3999 21.113 2.3999 20.5123Z" stroke={color} strokeWidth="2"/>
<path d="M15.5999 5.9999C15.5999 7.98813 13.9881 9.5999 11.9999 9.5999C10.0117 9.5999 8.3999 7.98813 8.3999 5.9999C8.3999 4.01168 10.0117 2.3999 11.9999 2.3999C13.9881 2.3999 15.5999 4.01168 15.5999 5.9999Z" stroke={color} strokeWidth="2"/>
    </svg>
  )
);

UserProfile02Icon.displayName = 'UserProfile02Icon';

export { UserProfile02Icon };
export default UserProfile02Icon;
