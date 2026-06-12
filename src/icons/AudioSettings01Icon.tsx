import * as React from 'react';

export interface AudioSettings01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const AudioSettings01Icon = React.forwardRef<SVGSVGElement, AudioSettings01IconProps>(
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
      <path d="M2.3999 4.7999L11.9999 4.7999M2.3999 11.9999H11.9999M11.9999 11.9999V14.3999M11.9999 11.9999V9.5999M2.3999 19.1999H7.1999M11.9999 19.1999L21.5999 19.1999M16.7999 11.9999H21.5999M16.7999 4.7999L21.5999 4.7999M16.7999 4.7999V7.1999M16.7999 4.7999V2.3999M7.7999 21.5999V16.7999" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

AudioSettings01Icon.displayName = 'AudioSettings01Icon';

export { AudioSettings01Icon };
export default AudioSettings01Icon;
