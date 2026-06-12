import * as React from 'react';

export interface Colors01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Colors01Icon = React.forwardRef<SVGSVGElement, Colors01IconProps>(
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
      <path d="M5.2001 9.44336C3.06871 10.482 1.6001 12.6695 1.6001 15.2C1.6001 18.7346 4.46547 21.6 8.0001 21.6C11.5347 21.6 14.4001 18.7346 14.4001 15.2C14.4001 14.929 14.3833 14.662 14.3506 14.4M12.4001 20.4923C13.4258 21.1913 14.6652 21.6 16.0001 21.6C19.5347 21.6 22.4001 18.7346 22.4001 15.2C22.4001 12.4504 20.6662 10.1059 18.2322 9.2M18.4001 8.8C18.4001 12.3346 15.5347 15.2 12.0001 15.2C8.46547 15.2 5.6001 12.3346 5.6001 8.8C5.6001 5.26538 8.46547 2.4 12.0001 2.4C15.5347 2.4 18.4001 5.26538 18.4001 8.8Z" stroke={color} strokeWidth="2"/>
    </svg>
  )
);

Colors01Icon.displayName = 'Colors01Icon';

export { Colors01Icon };
export default Colors01Icon;
