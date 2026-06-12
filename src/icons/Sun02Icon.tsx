import * as React from 'react';

export interface Sun02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Sun02Icon = React.forwardRef<SVGSVGElement, Sun02IconProps>(
  ({ size = 24, color = 'currentColor', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12.0003 1.76021V1M12.0003 23.0461V22.2859M22.2632 12.023H23.0234M0.977295 12.023H1.73751M19.2579 4.76622L19.7955 4.22867M4.20516 19.8175L4.74271 19.2799M19.2579 19.2799L19.7955 19.8174M4.20516 4.22861L4.74271 4.76616M18.0672 11.9815C18.0672 15.3403 15.3443 18.0632 11.9855 18.0632C8.62667 18.0632 5.90381 15.3403 5.90381 11.9815C5.90381 8.62265 8.62667 5.89979 11.9855 5.89979C15.3443 5.89979 18.0672 8.62265 18.0672 11.9815Z" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

Sun02Icon.displayName = 'Sun02Icon';

export { Sun02Icon };
export default Sun02Icon;
