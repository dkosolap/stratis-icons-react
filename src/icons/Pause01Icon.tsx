import * as React from 'react';

export interface Pause01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Pause01Icon = React.forwardRef<SVGSVGElement, Pause01IconProps>(
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
      <path d="M9.5999 15.5999V8.3999M14.3999 15.5999V8.3999M5.9999 21.5999H17.9999C19.9881 21.5999 21.5999 19.9881 21.5999 17.9999V5.9999C21.5999 4.01168 19.9881 2.3999 17.9999 2.3999H5.9999C4.01168 2.3999 2.3999 4.01168 2.3999 5.9999V17.9999C2.3999 19.9881 4.01168 21.5999 5.9999 21.5999Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Pause01Icon.displayName = 'Pause01Icon';

export { Pause01Icon };
export default Pause01Icon;
