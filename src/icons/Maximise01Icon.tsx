import * as React from 'react';

export interface Maximise01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Maximise01Icon = React.forwardRef<SVGSVGElement, Maximise01IconProps>(
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
      <path d="M21.5994 9.35163V2.3999H14.6476M21.5994 2.3999L13.489 10.5103M2.40063 14.6482V21.5999H9.35236M2.40063 21.5999L10.511 13.4896" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Maximise01Icon.displayName = 'Maximise01Icon';

export { Maximise01Icon };
export default Maximise01Icon;
