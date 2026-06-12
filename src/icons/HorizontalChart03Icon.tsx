import * as React from 'react';

export interface HorizontalChart03IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const HorizontalChart03Icon = React.forwardRef<SVGSVGElement, HorizontalChart03IconProps>(
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
      <path d="M2.91211 14.3547H14.2901M2.91211 14.3547L14.2317 14.3536C14.2513 14.3536 14.2708 14.354 14.2901 14.3547M19.8881 9.50813L8.91211 9.50813C9.57485 9.50813 10.1121 9.07832 10.1121 8.54813V5.7599C10.1121 5.22971 9.57485 4.7999 8.91211 4.7999L4.11211 4.7999C3.44937 4.7999 2.91211 5.22971 2.91211 5.7599L2.91211 9.50813L2.91211 14.3547L2.91211 18.2399C2.91211 18.7701 3.44937 19.1999 4.11211 19.1999H14.2321C14.8949 19.1999 15.4321 18.7701 15.4321 18.2399V15.3136C15.4321 14.799 14.9259 14.3789 14.2901 14.3547M2.91211 9.50813H19.8881C20.5509 9.50813 21.0881 9.93793 21.0881 10.4681V13.3947C21.0881 13.9249 20.5509 14.3547 19.8881 14.3547H14.2901M2.91211 21.5999V2.3999" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

HorizontalChart03Icon.displayName = 'HorizontalChart03Icon';

export { HorizontalChart03Icon };
export default HorizontalChart03Icon;
