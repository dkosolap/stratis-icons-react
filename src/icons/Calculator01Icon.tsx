import * as React from 'react';

export interface Calculator01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Calculator01Icon = React.forwardRef<SVGSVGElement, Calculator01IconProps>(
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
      <path d="M2.3999 12.2598H11.7404M12.2594 21.6004V2.40039M7.32963 9.14634V5.77336M5.64314 7.45985H9.01612M5.64314 17.449H9.01612M15.3729 14.0761H18.7458M15.3729 10.9626H18.7458M4.9945 21.6004H19.0053C20.4383 21.6004 21.5999 20.4387 21.5999 19.0058V4.99498C21.5999 3.56203 20.4383 2.40039 19.0053 2.40039H4.9945C3.56154 2.40039 2.3999 3.56203 2.3999 4.99498V19.0058C2.3999 20.4387 3.56154 21.6004 4.9945 21.6004Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Calculator01Icon.displayName = 'Calculator01Icon';

export { Calculator01Icon };
export default Calculator01Icon;
