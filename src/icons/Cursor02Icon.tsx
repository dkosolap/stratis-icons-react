import * as React from 'react';

export interface Cursor02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Cursor02Icon = React.forwardRef<SVGSVGElement, Cursor02IconProps>(
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
      <path d="M13.3324 13.3106L20.4001 20.3996M12.94 12.9165L18.5418 11.0739C19.5919 10.7286 19.5974 9.2424 18.5504 8.80466L5.23765 3.69867C4.2569 3.28867 3.30275 4.22117 3.68732 5.21382L8.51774 18.9212C8.92811 19.9804 10.41 20.0126 10.7816 18.9704L12.94 12.9165Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Cursor02Icon.displayName = 'Cursor02Icon';

export { Cursor02Icon };
export default Cursor02Icon;
