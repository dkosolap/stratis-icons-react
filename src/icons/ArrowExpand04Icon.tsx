import * as React from 'react';

export interface ArrowExpand04IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ArrowExpand04Icon = React.forwardRef<SVGSVGElement, ArrowExpand04IconProps>(
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
      <path d="M20 9.79311V4H14.2065M20 4L13.2409 10.7586M4 14.2069V20H9.79349M4 20L10.7591 13.2414" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ArrowExpand04Icon.displayName = 'ArrowExpand04Icon';

export { ArrowExpand04Icon };
export default ArrowExpand04Icon;
