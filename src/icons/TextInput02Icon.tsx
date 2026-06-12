import * as React from 'react';

export interface TextInput02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const TextInput02Icon = React.forwardRef<SVGSVGElement, TextInput02IconProps>(
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
      <path d="M6.5999 12.6004V11.4004M21.5999 9.60039V14.4004C21.5999 15.0631 21.0626 15.6004 20.3999 15.6004H3.5999C2.93716 15.6004 2.3999 15.0631 2.3999 14.4004V9.60039C2.3999 8.93765 2.93716 8.40039 3.5999 8.40039H20.3999C21.0626 8.40039 21.5999 8.93765 21.5999 9.60039Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

TextInput02Icon.displayName = 'TextInput02Icon';

export { TextInput02Icon };
export default TextInput02Icon;
