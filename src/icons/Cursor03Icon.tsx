import * as React from 'react';

export interface Cursor03IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Cursor03Icon = React.forwardRef<SVGSVGElement, Cursor03IconProps>(
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
      <path d="M18.5217 21.3649L21.3644 18.5222C21.6784 18.2082 21.6784 17.6991 21.3644 17.3852L16.8828 12.9035C16.5439 12.5647 16.5749 12.0065 16.9491 11.7072L20.7167 8.69309C21.2266 8.28513 21.0632 7.47157 20.4353 7.29216L3.4258 2.43231C2.81928 2.25902 2.25853 2.81977 2.43182 3.42629L7.29167 20.4358C7.47108 21.0637 8.28464 21.2271 8.6926 20.7171L11.7067 16.9495C12.006 16.5753 12.5642 16.5444 12.9031 16.8833L17.3847 21.3649C17.6987 21.6789 18.2077 21.6789 18.5217 21.3649Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Cursor03Icon.displayName = 'Cursor03Icon';

export { Cursor03Icon };
export default Cursor03Icon;
