import * as React from 'react';

export interface Edit03IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Edit03Icon = React.forwardRef<SVGSVGElement, Edit03IconProps>(
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
      <path d="M13.7999 19.5514H19.7999M4.19995 19.5514L8.56594 18.6717C8.79771 18.625 9.01053 18.5109 9.17767 18.3437L18.9513 8.56461C19.4199 8.09576 19.4196 7.33577 18.9506 6.86731L16.8802 4.79923C16.4114 4.33097 15.6518 4.33129 15.1834 4.79995L5.40871 14.58C5.2419 14.7469 5.128 14.9593 5.08125 15.1906L4.19995 19.5514Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Edit03Icon.displayName = 'Edit03Icon';

export { Edit03Icon };
export default Edit03Icon;
