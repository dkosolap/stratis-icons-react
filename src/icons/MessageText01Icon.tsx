import * as React from 'react';

export interface MessageText01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const MessageText01Icon = React.forwardRef<SVGSVGElement, MessageText01IconProps>(
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
      <path d="M8.39917 8.3999H15.5992M8.39917 13.1999H12.5992M21.5992 11.9999C21.5992 13.3799 21.308 14.6919 20.7837 15.8779L21.601 21.599L16.6981 20.3733C15.3091 21.1544 13.7062 21.5999 11.9992 21.5999C6.69724 21.5999 2.39917 17.3018 2.39917 11.9999C2.39917 6.69797 6.69724 2.3999 11.9992 2.3999C17.3011 2.3999 21.5992 6.69797 21.5992 11.9999Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

MessageText01Icon.displayName = 'MessageText01Icon';

export { MessageText01Icon };
export default MessageText01Icon;
