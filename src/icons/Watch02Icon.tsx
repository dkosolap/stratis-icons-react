import * as React from 'react';

export interface Watch02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Watch02Icon = React.forwardRef<SVGSVGElement, Watch02IconProps>(
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
      <path d="M15.8633 18.0411L14.9894 20.6628C14.9222 20.8642 14.7338 21 14.5215 21H9.31459C9.10233 21 8.91387 20.8642 8.84675 20.6628L7.97285 18.0411M7.97285 5.9589L8.84675 3.3372C8.91387 3.13583 9.10232 3 9.31459 3H14.5215C14.7338 3 14.9222 3.13583 14.9894 3.3372L15.8633 5.9589M7.4797 18.0411H16.3564C17.1735 18.0411 17.8359 17.3787 17.8359 16.5616V7.68493C17.8359 6.86785 17.1735 6.20548 16.3564 6.20548H7.4797C6.66262 6.20548 6.00024 6.86785 6.00024 7.68493V16.5616C6.00024 17.3787 6.66262 18.0411 7.4797 18.0411Z" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

Watch02Icon.displayName = 'Watch02Icon';

export { Watch02Icon };
export default Watch02Icon;
