import * as React from 'react';

export interface GitBranch03IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const GitBranch03Icon = React.forwardRef<SVGSVGElement, GitBranch03IconProps>(
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
      <path d="M8.71358 11.9998H2.3999M21.5999 11.8228H14.6879M14.6936 11.9998C14.6936 13.5096 13.4696 14.7335 11.9599 14.7335C10.4501 14.7335 9.22615 13.5096 9.22615 11.9998C9.22615 10.49 10.4501 9.26611 11.9599 9.26611C13.4696 9.26611 14.6936 10.49 14.6936 11.9998Z" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

GitBranch03Icon.displayName = 'GitBranch03Icon';

export { GitBranch03Icon };
export default GitBranch03Icon;
