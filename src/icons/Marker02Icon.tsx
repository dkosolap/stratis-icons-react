import * as React from 'react';

export interface Marker02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Marker02Icon = React.forwardRef<SVGSVGElement, Marker02IconProps>(
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
      <path d="M12.0001 21.5999C12.0001 21.5999 19.5131 14.9216 19.5131 9.91294C19.5131 5.76361 16.1494 2.3999 12.0001 2.3999C7.85076 2.3999 4.48706 5.76361 4.48706 9.91294C4.48706 14.9216 12.0001 21.5999 12.0001 21.5999Z" stroke={color} strokeWidth="2"/>
<path d="M14.4004 9.60005C14.4004 10.9255 13.3259 12.0001 12.0004 12.0001C10.6749 12.0001 9.60041 10.9255 9.60041 9.60005C9.60041 8.27457 10.6749 7.20005 12.0004 7.20005C13.3259 7.20005 14.4004 8.27457 14.4004 9.60005Z" stroke={color} strokeWidth="2"/>
    </svg>
  )
);

Marker02Icon.displayName = 'Marker02Icon';

export { Marker02Icon };
export default Marker02Icon;
