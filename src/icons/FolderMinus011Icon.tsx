import * as React from 'react';

export interface FolderMinus011IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const FolderMinus011Icon = React.forwardRef<SVGSVGElement, FolderMinus011IconProps>(
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
      <path d="M12.1027 19.9411H4.30361C2.97812 19.9411 1.9036 18.8665 1.90361 17.541L1.9037 8.41673C1.90371 7.50281 1.90337 6.20108 1.90308 5.25853C1.90287 4.59561 2.44021 4.05884 3.10312 4.05884H8.82134L11.5864 7.01247H19.9027C20.5654 7.01247 21.1027 7.54973 21.1027 8.21247V11.4M15.3086 16.5938H22.0968" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

FolderMinus011Icon.displayName = 'FolderMinus011Icon';

export { FolderMinus011Icon };
export default FolderMinus011Icon;
