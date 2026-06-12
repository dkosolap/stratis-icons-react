import * as React from 'react';

export interface Download01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Download01Icon = React.forwardRef<SVGSVGElement, Download01IconProps>(
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
      <path d="M4 20.3827C4.40471 20.778 4.95361 21 5.52595 21H18.4741C19.0464 21 19.5953 20.778 20 20.3827M12.0012 3V14.9425M7.06859 10.3793L12.0012 14.9425L16.9338 10.3793" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Download01Icon.displayName = 'Download01Icon';

export { Download01Icon };
export default Download01Icon;
