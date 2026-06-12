import * as React from 'react';

export interface LetterSpacing03IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const LetterSpacing03Icon = React.forwardRef<SVGSVGElement, LetterSpacing03IconProps>(
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
      <path d="M9.30784 7.05358L5.85387 3.59961L2.3999 7.05358M5.85387 3.59961V19.7181M9.30784 16.2642L5.85387 19.7181L2.3999 16.2642M14.2856 17.4155H17.3332M17.3332 17.4155H20.3809M17.3332 17.4155V7.05358M17.3332 7.05358H12.7618V8.88215M17.3332 7.05358H21.5999V9.18691" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

LetterSpacing03Icon.displayName = 'LetterSpacing03Icon';

export { LetterSpacing03Icon };
export default LetterSpacing03Icon;
