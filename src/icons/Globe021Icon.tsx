import * as React from 'react';

export interface Globe021IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Globe021Icon = React.forwardRef<SVGSVGElement, Globe021IconProps>(
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
      <path d="M2.3999 20.2055L3.72011 18.7938C5.61414 20.7113 8.24477 21.4585 11.1529 21.4585C16.9226 21.4585 21.5999 16.7812 21.5999 11.0115C21.5999 8.15 20.4494 5.5572 18.5858 3.67042L19.9056 2.54102M17.3468 10.6939C17.3468 14.4461 14.305 17.4879 10.5528 17.4879C6.80051 17.4879 3.75871 14.4461 3.75871 10.6939C3.75871 6.94163 6.80051 3.89983 10.5528 3.89983C14.305 3.89983 17.3468 6.94163 17.3468 10.6939Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Globe021Icon.displayName = 'Globe021Icon';

export { Globe021Icon };
export default Globe021Icon;
