import * as React from 'react';

export interface Upload02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Upload02Icon = React.forwardRef<SVGSVGElement, Upload02IconProps>(
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
      <path d="M12.001 14.9425L12.001 3M16.9336 7.56318L12.001 3L7.06835 7.56318M4 18.9663V20.3827C4.40471 20.778 4.95361 21 5.52595 21H18.4741C19.0464 21 19.5953 20.778 20 20.3827V18.9663" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Upload02Icon.displayName = 'Upload02Icon';

export { Upload02Icon };
export default Upload02Icon;
