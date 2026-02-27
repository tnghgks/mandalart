"use client";

import { driver } from "driver.js";
import "driver.js/dist/driver.css";

export default function TutorialButton() {
  const handleTutorial = () => {
    const driverObj = driver({
      showProgress: true,
      steps: [
        {
          element: "#Mandalart-cell-4-4",
          popover: {
            title: "1. 첫번째",
            description: "메인 목표를 설정합니다.",
            side: "left",
            align: "start",
          },
        },
        {
          element: "#Mandalart-cell-4-0",
          popover: {
            title: "2. 두번째",
            description:
              "메인 목표를 달성하기 위한 9개의 서브 목표를 설정합니다.",
          },
        },
      ],
    });

    driverObj.drive();
  };

  return (
    <button
      className="flex items-center gap-2 rounded-xl bg-[#18181B] px-8 py-4 text-[17px] font-medium text-zinc-400 transition-all hover:bg-[#27272A] hover:text-white"
      onClick={handleTutorial}
    >
      튜토리얼 →
    </button>
  );
}
