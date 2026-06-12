import * as React from 'react';

export interface Send03IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Send03Icon = React.forwardRef<SVGSVGElement, Send03IconProps>(
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
      <path d="M8.3999 11.8302H10.5159M4.7999 21.6004C3.47442 21.6004 2.3999 20.5259 2.3999 19.2004V4.80039C2.3999 3.47491 3.47442 2.40039 4.7999 2.40039H19.1999C20.5254 2.40039 21.5999 3.47491 21.5999 4.80039V19.2004C21.5999 20.5259 20.5254 21.6004 19.1999 21.6004H4.7999ZM8.3999 15.2419V8.25979C8.3999 7.47141 9.23117 6.95997 9.93489 7.31538L16.2188 10.4891C16.9605 10.8636 17.0008 11.9077 16.2902 12.3383L10.0063 16.1468C9.30119 16.5741 8.3999 16.0664 8.3999 15.2419Z" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

Send03Icon.displayName = 'Send03Icon';

export { Send03Icon };
export default Send03Icon;
