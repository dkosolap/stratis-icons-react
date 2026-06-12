import * as React from 'react';

export interface LockOpen02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const LockOpen02Icon = React.forwardRef<SVGSVGElement, LockOpen02IconProps>(
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
      <path d="M12 16.2V13.8M6.37505 7.88571C6.37505 4.8468 8.78362 2.39999 11.775 2.39999C13.6385 2.39999 15.2757 3.34943 16.2455 4.79999M6.60005 8.79999C5.61005 8.79999 4.80005 9.62285 4.80005 10.6286V19.7714C4.80005 20.7771 5.61005 21.6 6.60005 21.6H17.4001C18.3901 21.6 19.2001 20.7771 19.2001 19.7714V10.6286C19.2001 9.62285 18.3901 8.79999 17.4001 8.79999H6.60005Z" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

LockOpen02Icon.displayName = 'LockOpen02Icon';

export { LockOpen02Icon };
export default LockOpen02Icon;
