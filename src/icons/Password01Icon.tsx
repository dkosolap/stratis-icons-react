import * as React from 'react';

export interface Password01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Password01Icon = React.forwardRef<SVGSVGElement, Password01IconProps>(
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
      <path d="M6.52879 12H6.66882M11.9999 12H12.1399M17.3294 12H17.4694M2.3999 15.2667V8.73334C2.3999 7.55513 3.35503 6.60001 4.53324 6.60001H19.4666C20.6448 6.60001 21.5999 7.55513 21.5999 8.73334V15.2667C21.5999 16.4449 20.6448 17.4 19.4666 17.4H4.53324C3.35503 17.4 2.3999 16.4449 2.3999 15.2667Z" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

Password01Icon.displayName = 'Password01Icon';

export { Password01Icon };
export default Password01Icon;
