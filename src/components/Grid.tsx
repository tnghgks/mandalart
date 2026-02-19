import { cn } from "@/lib/utils";

export const Grid = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        `relative grid grid-cols-3 md:grid-cols-3 flex-col items-center justify-center rounded-[32px] p-10 shadow-2xl ring-1 ring-white/5`,
        className,
      )}
    >
      {children}
    </div>
  );
};
