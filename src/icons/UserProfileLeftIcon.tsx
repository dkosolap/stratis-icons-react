import * as React from 'react';

export interface UserProfileLeftIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const UserProfileLeftIcon = React.forwardRef<SVGSVGElement, UserProfileLeftIconProps>(
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
      <path d="M2.40039 21.5999L2.4008 17.9995C2.40102 16.0114 4.01273 14.3999 6.00079 14.3999H12.0004M17.5708 13.4999L14.9994 15.8999L17.5708 18.2999M14.9994 15.8999H21.5994M14.4004 5.9999C14.4004 7.98813 12.7886 9.5999 10.8004 9.5999C8.81216 9.5999 7.20039 7.98813 7.20039 5.9999C7.20039 4.01168 8.81216 2.3999 10.8004 2.3999C12.7886 2.3999 14.4004 4.01168 14.4004 5.9999Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

UserProfileLeftIcon.displayName = 'UserProfileLeftIcon';

export { UserProfileLeftIcon };
export default UserProfileLeftIcon;
