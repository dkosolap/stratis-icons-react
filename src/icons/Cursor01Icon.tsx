import * as React from 'react';

export interface Cursor01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Cursor01Icon = React.forwardRef<SVGSVGElement, Cursor01IconProps>(
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
      <path d="M12.565 18.3082L18.8759 21.3765C20.0589 21.9516 21.3207 20.7486 20.8026 19.5396L13.8272 3.26134C13.3419 2.12892 11.7437 2.10899 11.2303 3.22896L3.73425 19.5832C3.18646 20.7783 4.41641 22.0121 5.61325 21.4681L12.565 18.3082Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Cursor01Icon.displayName = 'Cursor01Icon';

export { Cursor01Icon };
export default Cursor01Icon;
