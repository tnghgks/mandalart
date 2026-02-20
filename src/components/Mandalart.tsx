"use client";

import { useEffect, useState } from "react";
import { Grid } from "./Grid";
import useLocalStorage from "@/lib/hooks/useLocalStorage";
import { cn } from "@/lib/utils";

export default function Mandalart() {
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
    <Grid className="w-full max-w-7xl gap-8 overflow-hidden rounded-2xl">
      {Array.from({ length: 9 }).map((_, grid_index) => (
        <Grid key={grid_index} className="h-full w-full gap-3">
          {Array.from({ length: 9 }).map((_, cell_index) => {
            const globalIndex = grid_index * 9 + cell_index;

            return (
              <textarea
                key={cell_index}
                value={data[globalIndex]}
                onChange={(e) => handleUpdate(globalIndex, e.target.value)}
                className={cn(
                  "aspect-square resize-none overflow-hidden rounded-xl border border-[#2A2A2F] bg-[#1F1F23] p-3.5 text-sm text-white transition-all duration-200 ease-in outline-none hover:border-[#3A3A40] focus:border-[#7C3AED]",
                  cell_index === 4 && "border-0 bg-[#7C3AED] font-semibold",
                )}
              />
            );
          })}
        </Grid>
      ))}
    </Grid>
  );
}
