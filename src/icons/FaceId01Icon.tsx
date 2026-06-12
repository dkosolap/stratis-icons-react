import * as React from 'react';

export interface FaceId01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const FaceId01Icon = React.forwardRef<SVGSVGElement, FaceId01IconProps>(
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
      <path d="M8.7999 2.40002H4.53324C3.35503 2.40002 2.3999 3.35515 2.3999 4.53336V8.80002M8.7999 21.6H4.53324C3.35503 21.6 2.3999 20.6449 2.3999 19.4667V15.2M15.1999 2.40002H19.4666C20.6448 2.40002 21.5999 3.35515 21.5999 4.53336V8.80002M21.5999 15.2V19.4667C21.5999 20.6449 20.6448 21.6 19.4666 21.6H15.1999M7.7999 9.16526V7.99526M16.1999 9.16526V7.99526M8.65256 15.6002C10.0207 16.6603 13.0888 16.6603 15.0006 15.6002M11.3999 12.6752L11.6484 12.4329C11.8735 12.2135 11.9999 11.9159 11.9999 11.6056V8.58026" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

FaceId01Icon.displayName = 'FaceId01Icon';

export { FaceId01Icon };
export default FaceId01Icon;
