import * as React from 'react';

export interface AtomIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const AtomIcon = React.forwardRef<SVGSVGElement, AtomIconProps>(
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
      <path d="M11.9997 12.0905V12.0003M20.9624 20.9629C19.0667 22.8586 13.5173 20.3827 8.5674 15.4328C3.6175 10.4829 1.14159 4.93349 3.03729 3.03778C4.933 1.14208 10.4825 3.61799 15.4323 8.56788C20.3822 13.5178 22.8582 19.0672 20.9624 20.9629ZM3.03749 20.963C1.14178 19.0673 3.61769 13.5178 8.56759 8.56794C13.5175 3.61805 19.0669 1.14213 20.9626 3.03784C22.8583 4.93354 20.3824 10.483 15.4325 15.4329C10.4826 20.3828 4.93319 22.8587 3.03749 20.963Z" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

AtomIcon.displayName = 'AtomIcon';

export { AtomIcon };
export default AtomIcon;
