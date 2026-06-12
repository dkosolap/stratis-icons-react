import * as React from 'react';

export interface Globe011IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Globe011Icon = React.forwardRef<SVGSVGElement, Globe011IconProps>(
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
      <path d="M3.52197 17.3998L4.68788 16.1531C6.36055 17.8465 8.68373 18.5063 11.252 18.5063C16.3474 18.5063 20.478 14.3757 20.478 9.28032C20.478 6.75325 19.462 4.46347 17.8161 2.79721L18.9817 1.7998M11.7505 18.5063V22.1998M11.7505 22.1998H6.26483M11.7505 22.1998H16.9869M16.722 8.9998C16.722 12.3135 14.0357 14.9998 10.722 14.9998C7.40826 14.9998 4.72197 12.3135 4.72197 8.9998C4.72197 5.6861 7.40826 2.9998 10.722 2.9998C14.0357 2.9998 16.722 5.6861 16.722 8.9998Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Globe011Icon.displayName = 'Globe011Icon';

export { Globe011Icon };
export default Globe011Icon;
