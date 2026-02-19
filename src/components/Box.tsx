import { cn } from "@/lib/utils";

export const Box = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        `relative flex items-center justify-center shadow-2xl`,
        className,
      )}
    >
      {children}
    </div>
  );
};
