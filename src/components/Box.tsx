"use client";

import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Box = ({ children, className, ...rest }: Props) => {
  return (
    <div
      className={cn(
        `relative flex items-center justify-center shadow-2xl`,
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
