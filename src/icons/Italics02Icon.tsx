import * as React from 'react';

export interface Italics02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Italics02Icon = React.forwardRef<SVGSVGElement, Italics02IconProps>(
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
      <path d="M10.3135 16.8004L13.0868 7.20039M10.3135 16.8004H7.42778M10.3135 16.8004H13.1992M13.0868 7.20039H10.2011M13.0868 7.20039H15.9725M4.7999 21.6004H19.1999C20.5254 21.6004 21.5999 20.5259 21.5999 19.2004V4.80039C21.5999 3.47491 20.5254 2.40039 19.1999 2.40039H4.7999C3.47442 2.40039 2.3999 3.47491 2.3999 4.80039V19.2004C2.3999 20.5259 3.47442 21.6004 4.7999 21.6004Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Italics02Icon.displayName = 'Italics02Icon';

export { Italics02Icon };
export default Italics02Icon;
