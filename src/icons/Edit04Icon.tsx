import * as React from 'react';

export interface Edit04IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Edit04Icon = React.forwardRef<SVGSVGElement, Edit04IconProps>(
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
      <path fillRule="evenodd" clipRule="evenodd" d="M15.3247 4.90729C15.7151 4.51674 16.3481 4.51647 16.7388 4.9067L19.0922 7.25746C19.483 7.64784 19.4833 8.28116 19.0928 8.67187L9.13495 18.6352C8.99567 18.7745 8.81832 18.8696 8.62517 18.9085L4.19995 19.8002L5.0932 15.3802C5.13215 15.1875 5.22707 15.0105 5.36608 14.8714L15.3247 4.90729Z" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  )
);

Edit04Icon.displayName = 'Edit04Icon';

export { Edit04Icon };
export default Edit04Icon;
