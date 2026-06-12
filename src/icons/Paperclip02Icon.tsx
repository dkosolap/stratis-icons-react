import * as React from 'react';

export interface Paperclip02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Paperclip02Icon = React.forwardRef<SVGSVGElement, Paperclip02IconProps>(
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
      <path d="M18.9569 11.5049L11.9115 18.5504C9.99386 20.468 7.11792 20.6945 5.16277 18.7393C3.24515 16.8217 3.49438 14.0436 5.44953 12.0884L13.3693 4.16862C14.5815 2.9565 16.5329 2.9565 17.745 4.16862C18.9571 5.38073 18.9571 7.33213 17.745 8.54425L9.68609 16.6031C9.08194 17.2073 8.10242 17.2073 7.49828 16.6031C6.89413 15.999 6.89413 15.0195 7.49827 14.4153L14.6828 7.23081" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

Paperclip02Icon.displayName = 'Paperclip02Icon';

export { Paperclip02Icon };
export default Paperclip02Icon;
