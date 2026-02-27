"use client";

import { useEffect, useState } from "react";
import { Grid } from "./Grid";
import useLocalStorage from "@/lib/hooks/useLocalStorage";
import { cn } from "@/lib/utils";

export default function Mandalart() {
  const [activeGrid, setActiveGrid] = useState<number | null>(null);
  const { getItem, setItem } = useLocalStorage();

  const [data, setData] = useState<string[]>(() => {
    return getItem("mandalart") ?? Array(81).fill("");
  });

  useEffect(() => {
    setItem("mandalart", data);
  }, [data]);

  const handleUpdate = (index: number, value: string) => {
    setData((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  };

  return (
    <>
      <Grid className="max-w-7xl gap-8 overflow-hidden rounded-2xl">
        {Array.from({ length: 9 }).map((_, grid_index) => {
          const isActive = grid_index === activeGrid;

          return (
            <Grid
              id={`Mandalart-grid-${grid_index}`}
              key={grid_index}
              onClick={() => setActiveGrid(grid_index)}
              className={cn(
                "gap-3 transition-all duration-300 ease-in-out",
                isActive &&
                  `absolute inset-0 z-50 m-auto h-[80vmin] w-[80vmin] scale-100 opacity-100`,
                activeGrid !== null &&
                  !isActive &&
                  "pointer-events-none scale-95 opacity-0",
              )}
            >
              {Array.from({ length: 9 }).map((_, cell_index) => {
                const globalIndex = grid_index * 9 + cell_index;

                return (
                  <div
                    id={`Mandalart-cell-${grid_index}-${cell_index}`}
                    key={cell_index}
                    className={cn(
                      "group flex aspect-square items-center overflow-hidden rounded-xl border border-[#2A2A2F] bg-[#1F1F23] p-3.5 text-sm text-white transition-all duration-200 ease-in focus-within:border-[#7C3AED] hover:border-[#3A3A40]",
                      cell_index === 4 && "border-0 bg-[#7C3AED] font-semibold",
                    )}
                  >
                    <textarea
                      value={data[globalIndex]}
                      onChange={(e) =>
                        handleUpdate(globalIndex, e.target.value)
                      }
                      className="w-full resize-none overflow-hidden border-0 bg-transparent pt-[40%] pb-[40%] text-center outline-none"
                    />
                  </div>
                );
              })}
            </Grid>
          );
        })}
        {activeGrid !== null && (
          <div
            onClick={() => setActiveGrid(null)}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          />
        )}
      </Grid>
    </>
  );
}
