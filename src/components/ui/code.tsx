
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CodeProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: LucideIcon;
}

const Code = React.forwardRef<HTMLDivElement, CodeProps>(
  ({ className, icon: Icon, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={className}
        {...props}
      >
        {Icon && <Icon className="h-4 w-4 mr-2" />}
        {children}
      </div>
    );
  }
);

Code.displayName = 'Code';

export { Code };
