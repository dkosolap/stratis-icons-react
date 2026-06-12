import * as React from 'react';

export interface Password02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Password02Icon = React.forwardRef<SVGSVGElement, Password02IconProps>(
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
      <path d="M6.52879 9.30247H6.66882M11.9999 9.30247H12.1399M17.3294 9.30247H17.4694M11.3999 14.7025H4.53324C3.35503 14.7025 2.3999 13.7473 2.3999 12.5691V6.0358C2.3999 4.85759 3.35503 3.90247 4.53324 3.90247H19.4666C20.6448 3.90247 21.5999 4.85759 21.5999 6.0358V9.30247M15.4111 13.5975L16.8011 12.9025C17.8146 12.3958 19.0076 12.3958 20.0211 12.9025L21.4111 13.5975C21.4111 13.5975 21.4111 15.7875 21.4111 16.9425C21.4111 18.0975 20.3434 18.8772 18.4111 20.0975C16.4788 18.8772 15.4111 17.8475 15.4111 16.9425V13.5975Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Password02Icon.displayName = 'Password02Icon';

export { Password02Icon };
export default Password02Icon;
