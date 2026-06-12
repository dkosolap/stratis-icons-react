import * as React from 'react';

export interface RulerIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const RulerIcon = React.forwardRef<SVGSVGElement, RulerIconProps>(
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
      <path d="M9.95549 17.9868L8.11344 16.1447M12.7185 15.2237L10.8765 13.3817M15.4816 12.4607L13.6396 10.6186M18.2447 9.6976L16.4026 7.85556M8.32411 21.2189L21.2184 8.3246C21.7271 7.81593 21.7271 6.99122 21.2184 6.48255L17.5177 2.78189C17.0091 2.27322 16.1844 2.27322 15.6757 2.78189L2.7814 15.6762C2.27274 16.1848 2.27274 17.0096 2.7814 17.5182L6.48207 21.2189C6.99073 21.7276 7.81544 21.7276 8.32411 21.2189Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

RulerIcon.displayName = 'RulerIcon';

export { RulerIcon };
export default RulerIcon;
