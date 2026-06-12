import * as React from 'react';

export interface FileAttach03IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const FileAttach03Icon = React.forwardRef<SVGSVGElement, FileAttach03IconProps>(
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
      <path d="M8.70101 9.91764V13.6059C8.70101 15.4284 10.1785 16.9059 12.001 16.9059C13.8236 16.9059 15.301 15.4284 15.301 13.6059V8.94705C15.301 7.98218 14.5188 7.19999 13.554 7.19999C12.5891 7.19999 11.8069 7.98218 11.8069 8.94705V13.4118M6.60004 2.39999H17.4003C18.7258 2.39999 19.8003 3.47454 19.8003 4.80004L19.8 19.2C19.8 20.5255 18.7254 21.6 17.4 21.6L6.59994 21.5999C5.27446 21.5999 4.19994 20.5254 4.19995 19.1999L4.20004 4.79998C4.20005 3.4745 5.27457 2.39999 6.60004 2.39999Z" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

FileAttach03Icon.displayName = 'FileAttach03Icon';

export { FileAttach03Icon };
export default FileAttach03Icon;
