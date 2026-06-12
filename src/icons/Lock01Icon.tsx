import * as React from 'react';

export interface Lock01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Lock01Icon = React.forwardRef<SVGSVGElement, Lock01IconProps>(
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
      <path d="M6.60005 8.80002V7.88574C6.60005 4.84683 9.00862 2.40002 12 2.40002C14.9915 2.40002 17.4001 4.84683 17.4001 7.88574V8.80002M6.60005 8.80002C5.61005 8.80002 4.80005 9.62288 4.80005 10.6286V19.7714C4.80005 20.7772 5.61005 21.6 6.60005 21.6H17.4001C18.3901 21.6 19.2001 20.7772 19.2001 19.7714V10.6286C19.2001 9.62288 18.3901 8.80002 17.4001 8.80002M6.60005 8.80002H17.4001M12 13.3715C12.9901 13.3715 13.8001 14.1943 13.8001 15.2C13.8001 16.2057 12.9901 17.0286 12 17.0286C11.01 17.0286 10.2 16.2057 10.2 15.2C10.2 14.1943 11.01 13.3715 12 13.3715Z" stroke={color} strokeWidth="2"/>
    </svg>
  )
);

Lock01Icon.displayName = 'Lock01Icon';

export { Lock01Icon };
export default Lock01Icon;
