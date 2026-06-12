import * as React from 'react';

export interface FileShield03IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const FileShield03Icon = React.forwardRef<SVGSVGElement, FileShield03IconProps>(
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
      <path d="M4.19995 6.00002V18C4.19995 19.9882 5.81173 21.6 7.79995 21.6H16.2C18.1882 21.6 19.8 19.9882 19.8 18V6.00002C19.8 4.0118 18.1882 2.40002 16.2 2.40002H7.79995C5.81173 2.40002 4.19995 4.0118 4.19995 6.00002Z" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
<path d="M13.6099 8.60481C12.5964 8.09806 11.4035 8.09806 10.39 8.60481L8.99995 9.29983V12.6448C8.99995 13.5498 10.0676 14.5795 12 15.7998C13.9323 14.5795 15 13.7998 15 12.6448C15 11.4898 15 9.29983 15 9.29983L13.6099 8.60481Z" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  )
);

FileShield03Icon.displayName = 'FileShield03Icon';

export { FileShield03Icon };
export default FileShield03Icon;
