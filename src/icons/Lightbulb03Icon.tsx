import * as React from 'react';

export interface Lightbulb03IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Lightbulb03Icon = React.forwardRef<SVGSVGElement, Lightbulb03IconProps>(
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
      <path d="M14.4 15.0001V19.2001C14.4 19.8628 13.8627 20.4001 13.2 20.4001H10.8C10.1373 20.4001 9.6 19.8628 9.6 19.2001V15.0001M18 9.6001C18 12.9138 15.3137 15.6001 12 15.6001C8.68629 15.6001 6 12.9138 6 9.6001C6 6.28639 8.68629 3.6001 12 3.6001C15.3137 3.6001 18 6.28639 18 9.6001Z" stroke={color} strokeWidth="2"/>
    </svg>
  )
);

Lightbulb03Icon.displayName = 'Lightbulb03Icon';

export { Lightbulb03Icon };
export default Lightbulb03Icon;
