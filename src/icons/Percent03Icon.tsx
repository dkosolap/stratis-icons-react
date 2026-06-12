import * as React from 'react';

export interface Percent03IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Percent03Icon = React.forwardRef<SVGSVGElement, Percent03IconProps>(
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
      <path d="M15.5999 15.5999L8.3999 8.4291M14.9999 8.95771V8.9999M8.9999 14.9999V15.0421M21.5999 11.9999C21.5999 17.3018 17.3018 21.5999 11.9999 21.5999C6.69797 21.5999 2.3999 17.3018 2.3999 11.9999C2.3999 6.69797 6.69797 2.3999 11.9999 2.3999C17.3018 2.3999 21.5999 6.69797 21.5999 11.9999Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Percent03Icon.displayName = 'Percent03Icon';

export { Percent03Icon };
export default Percent03Icon;
