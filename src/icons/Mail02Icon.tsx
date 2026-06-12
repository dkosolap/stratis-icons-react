import * as React from 'react';

export interface Mail02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Mail02Icon = React.forwardRef<SVGSVGElement, Mail02IconProps>(
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
      <path d="M3 9.99403C3 13.0587 3 17.8416 3 17.8416C3 19.0337 4.00736 20 5.25 20H18.75C19.9926 20 21 19.0337 21 17.8416V9.48746M3 9.99403C3 9.62194 3.19982 9.27609 3.52875 9.07889L12 4L20.4265 8.54687C20.7808 8.73802 21 9.09758 21 9.48746M3 9.99403C3.45 9.99403 12 15.3314 12 15.3314L21 9.48746" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Mail02Icon.displayName = 'Mail02Icon';

export { Mail02Icon };
export default Mail02Icon;
