import * as React from 'react';

export interface Moon01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Moon01Icon = React.forwardRef<SVGSVGElement, Moon01IconProps>(
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
      <path d="M21.6001 14.6397C20.6978 14.9133 19.7405 15.0605 18.7488 15.0605C13.3308 15.0605 8.93868 10.6683 8.93868 5.2503C8.93868 4.25908 9.08569 3.3022 9.35909 2.40027C5.33166 3.62165 2.40015 7.36331 2.40015 11.7897C2.40015 17.2077 6.7923 21.5998 12.2103 21.5998C16.6371 21.5998 20.379 18.6677 21.6001 14.6397Z" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  )
);

Moon01Icon.displayName = 'Moon01Icon';

export { Moon01Icon };
export default Moon01Icon;
