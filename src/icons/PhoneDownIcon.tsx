import * as React from 'react';

export interface PhoneDownIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const PhoneDownIcon = React.forwardRef<SVGSVGElement, PhoneDownIconProps>(
  ({ size = 24, color = 'currentColor', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M8.31998 18.163L11.7608 21.6003L15.3608 18.0003M11.7608 21.6003V12.7572M0.83291 9.5114C0.833015 8.72853 0.828652 7.80999 0.808902 7.56455C0.786318 6.86904 1.0132 6.30306 1.53289 5.78337C2.58546 4.85713 5.06583 3.81295 5.06583 3.81295C5.06583 3.81295 8.31998 2.40031 11.7621 2.40039C15.1461 2.40047 18.3513 3.47323 20.2107 4.3266C21.3484 4.8446 22.1066 5.37629 22.665 6.03465C23.0207 6.45693 23.1932 6.92932 23.1927 7.48176L23.1732 9.59319C23.1671 10.2588 22.6204 10.7922 21.9549 10.782L18.9437 10.736C18.2882 10.726 17.7621 10.1917 17.7621 9.53612V8.30199C17.7621 8.01166 17.5553 7.7636 17.2687 7.71702C16.1987 7.54311 13.6124 7.16099 11.7608 7.20039C10.1183 7.23534 7.85171 7.56416 6.86016 7.71967C6.57136 7.76497 6.36206 8.01418 6.36206 8.30651V9.51792C6.36206 10.1807 5.8248 10.7179 5.16206 10.7179L2.0365 10.7179C1.37109 10.7179 0.83282 10.1768 0.83291 9.5114Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

PhoneDownIcon.displayName = 'PhoneDownIcon';

export { PhoneDownIcon };
export default PhoneDownIcon;
