import * as React from 'react';

export interface Lock04IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Lock04Icon = React.forwardRef<SVGSVGElement, Lock04IconProps>(
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
      <path d="M6.60005 9.05591V7.86131C6.60005 4.83586 9.00862 2.3999 12 2.3999C14.9915 2.3999 17.4001 4.83586 17.4001 7.86131V9.65325M12 15.6854V13.2854M19.2001 14.432C19.2001 18.3908 15.9765 21.6001 12 21.6001C8.0236 21.6001 4.80005 18.3908 4.80005 14.432C4.80005 10.4731 8.0236 7.26388 12 7.26388C15.9765 7.26388 19.2001 10.4731 19.2001 14.432Z" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

Lock04Icon.displayName = 'Lock04Icon';

export { Lock04Icon };
export default Lock04Icon;
