import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  grid_index: number;
  onClick: () => void;
  isActive: boolean;
  hasActiveGrid: boolean;
}

export const Grid = ({
  children,
  grid_index,
  onClick,
  isActive,
  hasActiveGrid,
  ...rest
}: Props) => {
  return (
    <div
      id={`Mandalart-grid-${grid_index}`}
      onClick={onClick}
      className={cn(
        "relative grid grid-cols-3 flex-col items-center justify-center gap-3 transition-all duration-300 ease-in-out not-only:md:grid-cols-3",
        isActive &&
          `absolute inset-0 z-50 m-auto h-[80vmin] w-[80vmin] scale-100 opacity-100`,
        hasActiveGrid && !isActive && "pointer-events-none scale-95 opacity-0",
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
