"use client";

import { Box } from "./Box";
import { Grid } from "./Grid";

export default function Mandalart() {
  return (
    <Grid className="h-240 w-full max-w-7xl bg-[#18181B]">
      <>
        {Array.from({ length: 9 }).map((_, index) => {
          return (
            <Grid
              key={index}
              className="h-full w-full bg-[#18181B] rounded-2xl p-0"
            >
              <>
                {Array.from({ length: 9 }).map((_, index) => {
                  if (index === 4) {
                    return (
                      <Box
                        key={index}
                        className="h-full w-full bg-[#7C3AED] outline-none whitespace-pre-wrap wrap-break-word"
                        contentEditable={true}
                        suppressContentEditableWarning={true}
                        onInput={(e) =>
                          console.log(e.currentTarget.textContent)
                        }
                        onBlur={(e) =>
                          console.log("저장:", e.currentTarget.textContent)
                        }
                      ></Box>
                    );
                  }
                  return (
                    <Box
                      key={index}
                      className="h-full w-full bg-gray-400"
                    ></Box>
                  );
                })}
              </>
            </Grid>
          );
        })}
      </>
    </Grid>
  );
}
