import * as React from 'react';

export interface CameraOffIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const CameraOffIcon = React.forwardRef<SVGSVGElement, CameraOffIconProps>(
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
      <path d="M2.3999 7.98V17.82C2.3999 19.1455 3.47442 20.22 4.7999 20.22H14.3999M5.9999 5.58H7.1999L8.8799 2.7H15.1199L16.7999 5.58H19.1999C20.5254 5.58 21.5999 6.65452 21.5999 7.98V17.82C21.5999 18.7083 21.1173 19.484 20.3999 19.8989M14.6832 14.7C15.2533 14.0631 15.5999 13.222 15.5999 12.3C15.5999 10.3118 13.9881 8.7 11.9999 8.7C11.0779 8.7 10.2368 9.04662 9.5999 9.61667M11.3999 15.8502C9.84265 15.589 8.62441 14.328 8.42772 12.7497M20.9999 21.3L2.9999 2.7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

CameraOffIcon.displayName = 'CameraOffIcon';

export { CameraOffIcon };
export default CameraOffIcon;
