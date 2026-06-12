import * as React from 'react';

export interface PaintBucket01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const PaintBucket01Icon = React.forwardRef<SVGSVGElement, PaintBucket01IconProps>(
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
      <path d="M10.9499 2.40039L11.4627 2.91325M3.6009 13.0397H20.5971M11.4627 2.91325L12.2068 3.65737C12.2068 3.65737 4.45188 11.268 4.29431 11.4255C3.3687 12.3511 3.36869 13.8518 4.29431 14.7775L10.423 20.9062C11.3486 21.8318 12.8493 21.8318 13.775 20.9062L19.9037 14.7775C20.7892 13.892 20.8276 12.4802 20.0189 11.5491C19.9759 11.4547 19.9157 11.3662 19.838 11.2885L11.4627 2.91325Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

PaintBucket01Icon.displayName = 'PaintBucket01Icon';

export { PaintBucket01Icon };
export default PaintBucket01Icon;
