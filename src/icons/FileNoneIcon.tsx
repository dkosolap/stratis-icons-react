import * as React from 'react';

export interface FileNoneIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const FileNoneIcon = React.forwardRef<SVGSVGElement, FileNoneIconProps>(
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
      <path d="M15.0001 2.40001V6.00001C15.0001 6.66275 15.5374 7.20001 16.2001 7.20001H19.8001M15.0001 2.40001H15.6695C16.0075 2.40001 16.3291 2.54235 16.5619 2.78729C16.9118 3.15539 17.466 3.72215 18.0001 4.20001C18.4187 4.57453 19.0763 5.24666 19.4701 5.65514C19.683 5.87605 19.8001 6.171 19.8001 6.47784L19.8001 7.20001M15.0001 2.40001H5.99972M19.8001 7.20001L19.7999 21M4.19972 8.40001V19.1999C4.19971 20.5254 5.27423 21.6 6.59971 21.6H14.3997M20.4001 22.8L3.6001 1.20001" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

FileNoneIcon.displayName = 'FileNoneIcon';

export { FileNoneIcon };
export default FileNoneIcon;
