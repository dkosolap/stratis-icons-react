import * as React from 'react';

export interface FileLock03IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const FileLock03Icon = React.forwardRef<SVGSVGElement, FileLock03IconProps>(
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
      <path d="M10.2 10.2V9.00002C10.2 8.00591 11.0058 7.20002 12 7.20002C12.9941 7.20002 13.8 8.00591 13.8 9.00002V10.8M4.19995 18V6.00002C4.19995 4.0118 5.81173 2.40002 7.79995 2.40002H16.2C18.1882 2.40002 19.8 4.0118 19.8 6.00002V18C19.8 19.9882 18.1882 21.6 16.2 21.6H7.79995C5.81173 21.6 4.19995 19.9882 4.19995 18ZM9.59995 16.8H14.4C15.0627 16.8 15.6 16.2628 15.6 15.6V12C15.6 11.3373 15.0627 10.8 14.4 10.8H9.59995C8.93721 10.8 8.39995 11.3373 8.39995 12V15.6C8.39995 16.2628 8.93721 16.8 9.59995 16.8Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

FileLock03Icon.displayName = 'FileLock03Icon';

export { FileLock03Icon };
export default FileLock03Icon;
