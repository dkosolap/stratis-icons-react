import * as React from 'react';

export interface File03IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const File03Icon = React.forwardRef<SVGSVGElement, File03IconProps>(
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
      <path d="M8.40033 18V12.6M12.0003 18V7.20002M15.6003 18V10.8M6.60004 2.40002H17.4003C18.7258 2.40002 19.8003 3.47457 19.8003 4.80007L19.8 19.2001C19.8 20.5255 18.7254 21.6 17.4 21.6L6.59994 21.6C5.27446 21.6 4.19994 20.5254 4.19995 19.2L4.20004 4.80001C4.20005 3.47453 5.27457 2.40002 6.60004 2.40002Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

File03Icon.displayName = 'File03Icon';

export { File03Icon };
export default File03Icon;
