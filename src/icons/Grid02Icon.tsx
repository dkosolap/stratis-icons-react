import * as React from 'react';

export interface Grid02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Grid02Icon = React.forwardRef<SVGSVGElement, Grid02IconProps>(
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
      <path d="M8.7999 2.3999H4.53324C3.35503 2.3999 2.3999 3.35503 2.3999 4.53324V8.7999M8.7999 21.5999H4.53324C3.35503 21.5999 2.3999 20.6448 2.3999 19.4666V15.1999M15.1999 2.3999H19.4666C20.6448 2.3999 21.5999 3.35503 21.5999 4.53324V8.7999M21.5999 15.1999V19.4666C21.5999 20.6448 20.6448 21.5999 19.4666 21.5999H15.1999M15 12.0001H12.3M12.3 12.0001H9.60004M12.3 12.0001V14.6999M12.3 12.0001V9.29992" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

Grid02Icon.displayName = 'Grid02Icon';

export { Grid02Icon };
export default Grid02Icon;
