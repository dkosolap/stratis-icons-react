import * as React from 'react';

export interface FlipLeftIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const FlipLeftIcon = React.forwardRef<SVGSVGElement, FlipLeftIconProps>(
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
      <path d="M6.95377 14.0312L2.3999 9.41569L6.95377 4.80019M2.3999 9.41569L17.5999 9.41569C19.809 9.41569 21.5999 11.2065 21.5999 13.4157L21.5999 15.2002C21.5999 17.4093 19.809 19.2002 17.5999 19.2002L11.9999 19.2002" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

FlipLeftIcon.displayName = 'FlipLeftIcon';

export { FlipLeftIcon };
export default FlipLeftIcon;
