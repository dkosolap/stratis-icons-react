import * as React from 'react';

export interface TextInput01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const TextInput01Icon = React.forwardRef<SVGSVGElement, TextInput01IconProps>(
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
      <path d="M4.80005 4.7998H8.40005" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.5999 8.39981H3.5999C2.93716 8.39981 2.3999 8.93706 2.3999 9.59981V14.3998C2.3999 15.0625 2.93716 15.5998 3.5999 15.5998H6.5999M10.7999 8.39981H20.3999C21.0626 8.39981 21.5999 8.93706 21.5999 9.59981V14.3998C21.5999 15.0625 21.0626 15.5998 20.3999 15.5998H10.7999M6.5999 19.1998V4.7998M4.7999 19.1998H8.3999" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

TextInput01Icon.displayName = 'TextInput01Icon';

export { TextInput01Icon };
export default TextInput01Icon;
