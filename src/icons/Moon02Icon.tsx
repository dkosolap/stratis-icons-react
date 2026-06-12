import * as React from 'react';

export interface Moon02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Moon02Icon = React.forwardRef<SVGSVGElement, Moon02IconProps>(
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
      <path d="M18.9001 11.7002V8.70022M18.9001 8.70022V5.70022M18.9001 8.70022L21.9001 8.70022M18.9001 8.70022H15.9001M14.1001 5.70022V3.90022M14.1001 3.90022V2.10022M14.1001 3.90022L15.9001 3.90022M14.1001 3.90022L12.3001 3.90022M21.3 14.9396C20.3977 15.2133 19.4404 15.3604 18.4488 15.3604C13.0308 15.3604 8.63863 10.9682 8.63863 5.55025C8.63863 4.55903 8.78564 3.60215 9.05904 2.70022C5.03161 3.9216 2.1001 7.66326 2.1001 12.0896C2.1001 17.5076 6.49226 21.8998 11.9103 21.8998C16.337 21.8998 20.079 18.9677 21.3 14.9396Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Moon02Icon.displayName = 'Moon02Icon';

export { Moon02Icon };
export default Moon02Icon;
