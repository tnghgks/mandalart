import { cn } from "@/lib/utils";

export default function Cell({ data, grid_index, cell_index, onChange }: any) {
  return (
    <div
      id={`Mandalart-cell-${grid_index}-${cell_index}`}
      className={cn(
        "group flex aspect-square items-center overflow-hidden rounded-xl border border-[#2A2A2F] bg-[#1F1F23] p-3.5 text-sm text-white transition-all duration-200 ease-in focus-within:border-[#7C3AED] hover:border-[#3A3A40]",
        cell_index === 4 && "border-0 bg-[#7C3AED] font-semibold",
      )}
    >
      <textarea
        value={data}
        onChange={(e) => onChange(grid_index * 9 + cell_index, e.target.value)}
        className="w-full resize-none overflow-hidden border-0 bg-transparent pt-[40%] pb-[40%] text-center outline-none"
      />
    </div>
  );
}
