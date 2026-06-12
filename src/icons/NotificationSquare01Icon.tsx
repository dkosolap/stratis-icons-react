import * as React from 'react';

export interface NotificationSquare01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const NotificationSquare01Icon = React.forwardRef<SVGSVGElement, NotificationSquare01IconProps>(
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
      <path d="M11.4374 3H5.24997C4.00735 3 3 4.00734 3 5.24996V14.2502C3 15.4928 4.00736 16.5002 5.24999 16.5002L13.369 16.5001L17.625 21V16.5002L18.7501 16.5001C19.9927 16.5001 21 15.4928 21 14.2502V12.0004M21 5.81274C21 7.36601 19.7408 8.62519 18.1875 8.62519C16.6343 8.62519 15.3751 7.36601 15.3751 5.81274C15.3751 4.25946 16.6343 3.00028 18.1875 3.00028C19.7408 3.00028 21 4.25946 21 5.81274Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

NotificationSquare01Icon.displayName = 'NotificationSquare01Icon';

export { NotificationSquare01Icon };
export default NotificationSquare01Icon;
