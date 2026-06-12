import * as React from 'react';

export interface UnionIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const UnionIcon = React.forwardRef<SVGSVGElement, UnionIconProps>(
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
      <path d="M4.7999 21.5999H12.7999C14.1254 21.5999 15.1999 20.5254 15.1999 19.1999V15.1999H19.1999C20.5254 15.1999 21.5999 14.1254 21.5999 12.7999V4.7999C21.5999 3.47442 20.5254 2.3999 19.1999 2.3999H11.1999C9.87442 2.3999 8.7999 3.47442 8.7999 4.7999V8.7999H4.7999C3.47442 8.7999 2.3999 9.87442 2.3999 11.1999V19.1999C2.3999 20.5254 3.47442 21.5999 4.7999 21.5999Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

UnionIcon.displayName = 'UnionIcon';

export { UnionIcon };
export default UnionIcon;
