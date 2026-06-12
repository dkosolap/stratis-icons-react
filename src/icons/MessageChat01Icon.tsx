import * as React from 'react';

export interface MessageChat01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const MessageChat01Icon = React.forwardRef<SVGSVGElement, MessageChat01IconProps>(
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
      <path d="M19 10.5V6C19 4.89543 18.1046 4 17 4H5C3.89543 4 3 4.89543 3 6V13.8261C3 14.9307 3.89543 15.8261 5 15.8261H6.56522V20L10.7391 15.8261H11M16.163 18.3913L18.7717 21V18.3913H19C20.1046 18.3913 21 17.4959 21 16.3913V13C21 11.8954 20.1046 11 19 11H13C11.8954 11 11 11.8954 11 13V16.3913C11 17.4959 11.8954 18.3913 13 18.3913H16.163Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

MessageChat01Icon.displayName = 'MessageChat01Icon';

export { MessageChat01Icon };
export default MessageChat01Icon;
