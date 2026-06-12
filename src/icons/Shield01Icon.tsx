import * as React from 'react';

export interface Shield01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Shield01Icon = React.forwardRef<SVGSVGElement, Shield01IconProps>(
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
      <path d="M12 2.39999C9.30325 4.69279 7.61285 4.79999 4.80005 4.79999V14.028C4.80005 17.7104 7.36245 18.6712 12 21.6C16.6376 18.6712 19.2001 17.7104 19.2001 14.028C19.2001 10.3456 19.2001 4.79999 19.2001 4.79999C16.3872 4.79999 14.6968 4.69279 12 2.39999Z" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  )
);

Shield01Icon.displayName = 'Shield01Icon';

export { Shield01Icon };
export default Shield01Icon;
