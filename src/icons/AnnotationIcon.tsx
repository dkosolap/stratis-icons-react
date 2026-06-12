import * as React from 'react';

export interface AnnotationIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const AnnotationIcon = React.forwardRef<SVGSVGElement, AnnotationIconProps>(
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
      <path d="M12 21L14.4457 16.3043H19C20.1046 16.3043 21 15.4089 21 14.3043V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V14.3043C3 15.4089 3.89543 16.3043 5 16.3043H9.75L12 21Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

AnnotationIcon.displayName = 'AnnotationIcon';

export { AnnotationIcon };
export default AnnotationIcon;
