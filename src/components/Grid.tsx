import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Grid = ({ children, className, ...rest }: Props) => {
  return (
    <div
      className={cn(
        `relative grid grid-cols-3 flex-col items-center justify-center not-only:md:grid-cols-3`,
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
