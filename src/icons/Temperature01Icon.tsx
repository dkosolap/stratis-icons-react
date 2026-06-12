import * as React from 'react';

export interface Temperature01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Temperature01Icon = React.forwardRef<SVGSVGElement, Temperature01IconProps>(
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
      <path d="M8.39995 17.3999H8.4562M14.55 11.2499L16.8 8.9999M16.8 8.9999L19.05 11.2499M16.8 8.9999V5.3999M16.8 8.9999L13.8 7.4999M16.8 8.9999L19.8 7.4999M12.6 17.3999C12.6 19.7195 10.7195 21.5999 8.39995 21.5999C6.08036 21.5999 4.19995 19.7195 4.19995 17.3999C4.19995 15.9727 4.91186 14.7117 5.99995 13.9527V4.79833C5.99995 3.47285 7.07447 2.3999 8.39995 2.3999C9.72543 2.3999 10.8 3.47442 10.8 4.7999V13.9527C11.6592 14.7218 12.6 16.156 12.6 17.3999Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Temperature01Icon.displayName = 'Temperature01Icon';

export { Temperature01Icon };
export default Temperature01Icon;
