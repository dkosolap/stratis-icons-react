import * as React from 'react';

export interface File01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const File01Icon = React.forwardRef<SVGSVGElement, File01IconProps>(
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
      <path d="M17.8 2.39999H6.5998C5.27432 2.39999 4.19981 3.4745 4.1998 4.79998L4.19971 19.1999C4.1997 20.5254 5.27421 21.5999 6.5997 21.5999L17.3997 21.6C18.7252 21.6 19.7997 20.5255 19.7998 19.2L19.8 4.40003C19.8001 3.29545 18.9046 2.39999 17.8 2.39999Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

File01Icon.displayName = 'File01Icon';

export { File01Icon };
export default File01Icon;
