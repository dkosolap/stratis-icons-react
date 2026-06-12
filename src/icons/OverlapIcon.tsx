import * as React from 'react';

export interface OverlapIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const OverlapIcon = React.forwardRef<SVGSVGElement, OverlapIconProps>(
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
      <path d="M7.1999 8.7999H4.7999C3.47442 8.7999 2.3999 9.87442 2.3999 11.1999C2.3999 12.5254 2.3999 17.8744 2.3999 19.1999C2.3999 20.5254 3.47442 21.5999 4.7999 21.5999C4.7999 21.5999 11.4744 21.5999 12.7999 21.5999C14.1254 21.5999 15.1999 20.5254 15.1999 19.1999V16.1999M19.1999 2.3999L11.1999 2.3999C9.87442 2.3999 8.7999 3.47442 8.7999 4.7999C8.7999 6.12539 8.7999 11.4744 8.7999 12.7999C8.7999 14.1254 9.87442 15.1999 11.1999 15.1999C11.1999 15.1999 17.8744 15.1999 19.1999 15.1999C20.5254 15.1999 21.5999 14.1254 21.5999 12.7999V4.7999C21.5999 3.47442 20.5254 2.3999 19.1999 2.3999Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

OverlapIcon.displayName = 'OverlapIcon';

export { OverlapIcon };
export default OverlapIcon;
