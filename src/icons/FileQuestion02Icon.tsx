import * as React from 'react';

export interface FileQuestion02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const FileQuestion02Icon = React.forwardRef<SVGSVGElement, FileQuestion02IconProps>(
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
      <path d="M11.9999 21.5549H5.99984C4.67436 21.5549 3.59984 20.4803 3.59985 19.1548L3.59995 4.75491C3.59995 3.42943 4.67447 2.35492 5.99995 2.35492H16.8002C18.1257 2.35492 19.2002 3.42944 19.2002 4.75492V8.95492M15.6002 16.0125C15.6002 14.7158 16.6747 13.6646 18.0002 13.6646C19.3257 13.6646 20.4002 14.7158 20.4002 16.0125C20.4002 17.3092 19.3257 18.3604 18.0002 18.3604M18.0002 21.6451V21.5549M7.80023 7.15492H15.0002M7.80023 10.7549H15.0002M7.80023 14.3549H11.4002" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

FileQuestion02Icon.displayName = 'FileQuestion02Icon';

export { FileQuestion02Icon };
export default FileQuestion02Icon;
