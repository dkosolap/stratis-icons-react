import * as React from 'react';

export interface Type02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Type02Icon = React.forwardRef<SVGSVGElement, Type02IconProps>(
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
      <path d="M9.08571 19.1998H12.3529M12.3529 19.1998H15.7714M12.3529 19.1998V4.7998M12.3529 4.7998H7.02857C6.46051 4.7998 6 5.26031 6 5.82838V7.34098M12.3529 4.7998H17.2538C17.8218 4.7998 18.2823 5.26031 18.2823 5.82838V7.76451" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Type02Icon.displayName = 'Type02Icon';

export { Type02Icon };
export default Type02Icon;
