import * as React from 'react';

export interface FileAttach02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const FileAttach02Icon = React.forwardRef<SVGSVGElement, FileAttach02IconProps>(
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
      <path d="M10.7997 21.6H6.5997C5.27421 21.6 4.1997 20.5254 4.19971 19.2L4.1998 4.80001C4.19981 3.47453 5.27432 2.40002 6.5998 2.40002H17.4001C18.7256 2.40002 19.8001 3.47454 19.8001 4.80002V10.2M13.8001 15.5542V18.4986C13.8001 19.9535 15.3515 21.288 16.8065 21.288C18.2614 21.288 19.8001 19.9535 19.8001 18.4986V14.7794C19.8001 14.0091 19.3573 13.2274 18.3723 13.2274C17.3185 13.2274 16.8065 14.0091 16.8065 14.7793V18.3436" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

FileAttach02Icon.displayName = 'FileAttach02Icon';

export { FileAttach02Icon };
export default FileAttach02Icon;
