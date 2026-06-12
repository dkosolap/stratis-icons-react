import * as React from 'react';

export interface Temperature04IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Temperature04Icon = React.forwardRef<SVGSVGElement, Temperature04IconProps>(
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
      <path d="M12 17.3999H12.0563M16.2 17.3999C16.2 19.7195 14.3196 21.5999 12 21.5999C9.68045 21.5999 7.80005 19.7195 7.80005 17.3999C7.80005 15.9727 8.51196 14.7117 9.60005 13.9527V4.79833C9.60005 3.47285 10.6746 2.3999 12 2.3999C13.3255 2.3999 14.4 3.47442 14.4 4.7999V13.9527C15.2593 14.7218 16.2 16.156 16.2 17.3999Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Temperature04Icon.displayName = 'Temperature04Icon';

export { Temperature04Icon };
export default Temperature04Icon;
