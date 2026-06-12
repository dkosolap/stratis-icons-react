import * as React from 'react';

export interface CameraLensIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const CameraLensIcon = React.forwardRef<SVGSVGElement, CameraLensIconProps>(
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
      <path d="M7.7999 10.2L10.7993 8.07185L17.3999 3M11.9999 7.2L20.9999 13.2M16.1999 10.8L13.1999 21M14.3999 15.6H2.9999M9.5999 15.6L4.7999 3M7.1999 21.6H16.7999C19.4509 21.6 21.5999 19.451 21.5999 16.8V7.2C21.5999 4.54903 19.4509 2.4 16.7999 2.4H7.1999C4.54894 2.4 2.3999 4.54903 2.3999 7.2V16.8C2.3999 19.451 4.54894 21.6 7.1999 21.6Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

CameraLensIcon.displayName = 'CameraLensIcon';

export { CameraLensIcon };
export default CameraLensIcon;
