import * as React from 'react';

export interface ArrowRefresh05IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ArrowRefresh05Icon = React.forwardRef<SVGSVGElement, ArrowRefresh05IconProps>(
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
      <path d="M12 20.6942C7.02944 20.6942 3 16.8016 3 11.9999C3 8.96454 4.61019 6.29246 7.05044 4.73732M13.3635 3.40476C17.687 4.03953 21 7.64598 21 11.9999C21 15.1321 19.2855 17.8775 16.7136 19.4079M13.1255 5.61085L10.739 3.30542L13.1255 1V5.61085ZM10.7381 18.3892L13.1246 20.6946L10.7381 23L10.7381 18.3892Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ArrowRefresh05Icon.displayName = 'ArrowRefresh05Icon';

export { ArrowRefresh05Icon };
export default ArrowRefresh05Icon;
