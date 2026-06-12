import * as React from 'react';

export interface LockOpen01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const LockOpen01Icon = React.forwardRef<SVGSVGElement, LockOpen01IconProps>(
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
      <path d="M6.60005 8.79999V7.88571C6.60005 4.8468 9.00862 2.39999 12 2.39999C13.8635 2.39999 15.5007 3.34943 16.4705 4.79999M6.60005 8.79999C5.61005 8.79999 4.80005 9.62285 4.80005 10.6286V19.7714C4.80005 20.7771 5.61005 21.6 6.60005 21.6H17.4001C18.3901 21.6 19.2001 20.7771 19.2001 19.7714V10.6286C19.2001 9.62285 18.3901 8.79999 17.4001 8.79999H6.60005ZM12 13.3714C12.9901 13.3714 13.8001 14.1943 13.8001 15.2C13.8001 16.2057 12.9901 17.0286 12 17.0286C11.01 17.0286 10.2 16.2057 10.2 15.2C10.2 14.1943 11.01 13.3714 12 13.3714Z" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

LockOpen01Icon.displayName = 'LockOpen01Icon';

export { LockOpen01Icon };
export default LockOpen01Icon;
