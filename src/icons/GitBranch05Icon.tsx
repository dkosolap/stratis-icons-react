import * as React from 'react';

export interface GitBranch05IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const GitBranch05Icon = React.forwardRef<SVGSVGElement, GitBranch05IconProps>(
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
      <path d="M6.66667 8.34197C8.13943 8.34197 9.33333 7.14613 9.33333 5.67098C9.33333 4.19584 8.13943 3 6.66667 3C5.19391 3 4 4.19584 4 5.67098C4 7.14613 5.19391 8.34197 6.66667 8.34197ZM6.66667 8.34197V20.0667M17.3333 14.7247C18.8061 14.7247 20 15.9205 20 17.3957C20 18.8708 18.8061 20.0667 17.3333 20.0667C15.8606 20.0667 14.6667 18.8708 14.6667 17.3957C14.6667 15.9205 15.8606 14.7247 17.3333 14.7247ZM17.3333 14.7247V8.37757C17.3333 6.90481 16.1394 5.7109 14.6667 5.7109H13.0667" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

GitBranch05Icon.displayName = 'GitBranch05Icon';

export { GitBranch05Icon };
export default GitBranch05Icon;
