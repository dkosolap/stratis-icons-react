import * as React from 'react';

export interface MediaStrip01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const MediaStrip01Icon = React.forwardRef<SVGSVGElement, MediaStrip01IconProps>(
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
      <path d="M3.0001 7.1999L21.0001 7.1999M3.0001 16.7999L21.0001 16.7999M12.0001 2.3999L12.0001 21.5999M16.8001 2.3999L16.8001 7.1999M16.8001 16.7999L16.8001 21.5999M7.2001 2.3999L7.2001 7.1999M7.2001 16.7999L7.2001 21.5999M5.99999 2.3999L18.0001 2.3999C19.9883 2.39991 21.6001 4.01168 21.6001 5.99991L21.6001 17.9999C21.6001 19.9881 19.9883 21.5999 18.0001 21.5999L5.99999 21.5999C4.01176 21.5999 2.39999 19.9881 2.39999 17.9999L2.39999 5.9999C2.39999 4.01168 4.01176 2.3999 5.99999 2.3999Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

MediaStrip01Icon.displayName = 'MediaStrip01Icon';

export { MediaStrip01Icon };
export default MediaStrip01Icon;
