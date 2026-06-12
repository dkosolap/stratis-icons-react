import * as React from 'react';

export interface Alarm04IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Alarm04Icon = React.forwardRef<SVGSVGElement, Alarm04IconProps>(
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
      <path d="M12 9.60039V12.6004M12 12.6004V15.6004M12 12.6004H15M12 12.6004H9.00005M5.85605 18.9124L3.16805 21.6004M20.832 21.6004L18.144 18.9124M4.80005 2.40039L1.80005 5.40039M22.2 5.40039L19.2 2.40039M20.448 12.7684C20.448 17.4341 16.6658 21.2164 12 21.2164C7.33435 21.2164 3.55205 17.4341 3.55205 12.7684C3.55205 8.10269 7.33435 4.32039 12 4.32039C16.6658 4.32039 20.448 8.10269 20.448 12.7684Z" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

Alarm04Icon.displayName = 'Alarm04Icon';

export { Alarm04Icon };
export default Alarm04Icon;
