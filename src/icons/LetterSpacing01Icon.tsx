import * as React from 'react';

export interface LetterSpacing01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const LetterSpacing01Icon = React.forwardRef<SVGSVGElement, LetterSpacing01IconProps>(
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
      <path d="M5.76304 14.0282L2.3999 17.3913L5.76304 20.7545M2.3999 17.3913H21.5999M18.2368 14.0282L21.5999 17.3913L18.2368 20.7545M12.2584 12.4898V2.40039M16.4129 2.40039L12.2584 2.40039L7.80719 2.40039" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

LetterSpacing01Icon.displayName = 'LetterSpacing01Icon';

export { LetterSpacing01Icon };
export default LetterSpacing01Icon;
