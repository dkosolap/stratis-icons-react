import * as React from 'react';

export interface Layers05IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Layers05Icon = React.forwardRef<SVGSVGElement, Layers05IconProps>(
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
      <path d="M21.5999 11.975L11.9999 16.8958L2.3999 11.975M21.5999 16.6792L11.9999 21.5999L2.3999 16.6792M11.9999 2.3999L21.5999 7.32065L11.9999 12.2414L2.3999 7.32065L11.9999 2.3999Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Layers05Icon.displayName = 'Layers05Icon';

export { Layers05Icon };
export default Layers05Icon;
