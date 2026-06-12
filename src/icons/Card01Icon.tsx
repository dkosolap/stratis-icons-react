import * as React from 'react';

export interface Card01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Card01Icon = React.forwardRef<SVGSVGElement, Card01IconProps>(
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
      <path d="M2.99968 9.29995H20.9997M4.80015 5.1001H19.1998C20.5252 5.1001 21.5997 6.17377 21.5998 7.49923L21.6 16.5011C21.6001 17.8266 20.5255 18.9001 19.2001 18.9001L4.80038 18.8999C3.47493 18.8999 2.40044 17.8254 2.4004 16.5L2.40015 7.50016C2.40011 6.17465 3.47464 5.1001 4.80015 5.1001Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Card01Icon.displayName = 'Card01Icon';

export { Card01Icon };
export default Card01Icon;
