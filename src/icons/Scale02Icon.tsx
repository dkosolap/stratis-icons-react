import * as React from 'react';

export interface Scale02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Scale02Icon = React.forwardRef<SVGSVGElement, Scale02IconProps>(
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
      <path d="M10.4765 18.0004H5.9999V13.2004M5.9999 18.0004L11.3332 12.6671M21.5999 10.8004H15.5999C14.2744 10.8004 13.1999 9.72587 13.1999 8.40039V2.40039M4.53324 21.6004H19.4666C20.6448 21.6004 21.5999 20.6453 21.5999 19.4671V4.53372C21.5999 3.35552 20.6448 2.40039 19.4666 2.40039H4.53324C3.35503 2.40039 2.3999 3.35552 2.3999 4.53372V19.4671C2.3999 20.6453 3.35503 21.6004 4.53324 21.6004Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Scale02Icon.displayName = 'Scale02Icon';

export { Scale02Icon };
export default Scale02Icon;
