import * as React from 'react';

export interface MediaStrip02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const MediaStrip02Icon = React.forwardRef<SVGSVGElement, MediaStrip02IconProps>(
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
      <path d="M7.1999 20.9999V2.9999M16.7999 20.9999V2.9999M2.3999 11.9999H21.5999M2.3999 7.1999H7.1999M16.7999 7.1999H21.5999M2.3999 16.7999H7.1999M16.7999 16.7999H21.5999M2.3999 18L2.39991 5.9999C2.39991 4.01168 4.01168 2.3999 5.99991 2.3999L17.9999 2.3999C19.9881 2.3999 21.5999 4.01168 21.5999 5.9999V18C21.5999 19.9882 19.9881 21.6 17.9999 21.6H5.9999C4.01168 21.6 2.3999 19.9882 2.3999 18Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

MediaStrip02Icon.displayName = 'MediaStrip02Icon';

export { MediaStrip02Icon };
export default MediaStrip02Icon;
