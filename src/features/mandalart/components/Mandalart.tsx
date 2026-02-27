"use client";

import { useEffect, useState } from "react";
import { Grid } from "./Grid";
import useLocalStorage from "@/lib/hooks/useLocalStorage";
import Cell from "./Cell";

export default function Mandalart() {
  const { getItem, setItem } = useLocalStorage();
  const [activeGrid, setActiveGrid] = useState<number | null>(null);
  const [data, setData] = useState<string[]>(() => {
    return getItem("mandalart") ?? Array(81).fill("");
  });

  const handleUpdate = (cell_index: number, value: string) => {
    setData((prev) => {
      const next = [...prev];
      next[cell_index] = value;
      return next;
    });
  };

  const handleActiveGrid = (grid_index: number) => {
    setActiveGrid(grid_index);
  };

  useEffect(() => {
    setItem("mandalart", data);
  }, [data]);

  return (
    <>
      <div className="relative grid max-w-7xl grid-cols-3 flex-col items-center justify-center gap-8 overflow-hidden rounded-2xl not-only:md:grid-cols-3">
        {Array.from({ length: 9 }).map((_, grid_index) => {
          const isActive = grid_index === activeGrid;
          return (
            <Grid
              grid_index={grid_index}
              key={grid_index}
              onClick={() => handleActiveGrid(grid_index)}
              isActive={isActive}
              hasActiveGrid={activeGrid !== null}
            >
              {Array.from({ length: 9 }).map((_, cell_index) => {
                const globalIndex = grid_index * 9 + cell_index;

                return (
                  <Cell
                    key={cell_index}
                    data={data[globalIndex]}
                    grid_index={grid_index}
                    cell_index={cell_index}
                    onChange={handleUpdate}
                  />
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
      </div>
    </>
  );
}
