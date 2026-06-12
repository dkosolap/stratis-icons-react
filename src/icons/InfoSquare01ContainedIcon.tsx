import * as React from 'react';

export interface InfoSquare01ContainedIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const InfoSquare01ContainedIcon = React.forwardRef<SVGSVGElement, InfoSquare01ContainedIconProps>(
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
      <path d="M12 12.0001L12 16.5M12 8.66462V8.62507M3 17.625L3 6.37498C3 4.51103 4.51104 3 6.375 3L17.625 3C19.489 3 21 4.51103 21 6.37498L21 17.625C21 19.489 19.489 21 17.625 21H6.375C4.51104 21 3 19.489 3 17.625Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

InfoSquare01ContainedIcon.displayName = 'InfoSquare01ContainedIcon';

export { InfoSquare01ContainedIcon };
export default InfoSquare01ContainedIcon;
