import * as React from 'react';

export interface TagIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const TagIcon = React.forwardRef<SVGSVGElement, TagIconProps>(
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
      <path d="M16.3539 7.65238L16.3475 7.65235M19.5224 2.85129L13.7221 2.40511C13.2078 2.36555 12.702 2.55269 12.3373 2.91739L2.91738 12.3373C2.22741 13.0272 2.22741 14.1459 2.91738 14.8359L9.16393 21.0824C9.8539 21.7724 10.9726 21.7724 11.6625 21.0824L21.0824 11.6626C21.4471 11.2978 21.6342 10.792 21.5947 10.2777L21.1485 4.47737C21.0817 3.6085 20.3913 2.91813 19.5224 2.85129Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

TagIcon.displayName = 'TagIcon';

export { TagIcon };
export default TagIcon;
