import * as React from 'react';

export interface UserProfileUpIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const UserProfileUpIcon = React.forwardRef<SVGSVGElement, UserProfileUpIconProps>(
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
      <path d="M2.3999 21.5999L2.40031 17.9995C2.40053 16.0114 4.01224 14.3999 6.00031 14.3999H12.5999M21.5999 11.2713L19.1999 8.6999L16.7999 11.2713M19.1999 8.6999V15.2999M14.3999 5.9999C14.3999 7.98813 12.7881 9.5999 10.7999 9.5999C8.81167 9.5999 7.1999 7.98813 7.1999 5.9999C7.1999 4.01168 8.81167 2.3999 10.7999 2.3999C12.7881 2.3999 14.3999 4.01168 14.3999 5.9999Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

UserProfileUpIcon.displayName = 'UserProfileUpIcon';

export { UserProfileUpIcon };
export default UserProfileUpIcon;
