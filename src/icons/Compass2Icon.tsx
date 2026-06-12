import * as React from 'react';

export interface Compass2IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Compass2Icon = React.forwardRef<SVGSVGElement, Compass2IconProps>(
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
      <path d="M3.5835 21.6004L10.9479 8.71272M13.578 8.71272L20.4164 21.6004M4.36278 14.762C6.29076 17.6647 9.11555 19.4963 12.2632 19.4963C15.4108 19.4963 18.2356 17.6647 20.1636 14.762M12.2629 3.71546C10.8104 3.71546 9.63281 4.89301 9.63281 6.3456C9.63281 7.79818 10.8104 8.97573 12.2629 8.97573C13.7155 8.97573 14.8931 7.79818 14.8931 6.3456C14.8931 4.89301 13.7155 3.71546 12.2629 3.71546ZM12.2629 3.71546V2.40039" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Compass2Icon.displayName = 'Compass2Icon';

export { Compass2Icon };
export default Compass2Icon;
