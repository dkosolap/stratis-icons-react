import * as React from 'react';

export interface FileLock01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const FileLock01Icon = React.forwardRef<SVGSVGElement, FileLock01IconProps>(
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
      <path d="M9.6001 21.6H7.2001C5.21187 21.6 3.6001 19.9882 3.6001 18V6.00002C3.6001 4.0118 5.21187 2.40002 7.2001 2.40002H15.6001C17.5883 2.40002 19.2001 4.0118 19.2001 6.00002V9.00002M15.0001 15V13.8C15.0001 12.8059 15.806 12 16.8001 12C17.7942 12 18.6001 12.8059 18.6001 13.8V15.6M14.4001 21.6H19.2001C19.8628 21.6 20.4001 21.0628 20.4001 20.4V16.8C20.4001 16.1373 19.8628 15.6 19.2001 15.6H14.4001C13.7374 15.6 13.2001 16.1373 13.2001 16.8V20.4C13.2001 21.0628 13.7374 21.6 14.4001 21.6Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

FileLock01Icon.displayName = 'FileLock01Icon';

export { FileLock01Icon };
export default FileLock01Icon;
