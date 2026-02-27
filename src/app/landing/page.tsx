import { Mandalart, TutorialButton } from "@/features/mandalart";

import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center pt-40 pb-20">
      {/* Badge */}
      <div className="mb-6 flex items-center gap-2 rounded-full bg-[#1C1027] px-4 py-1.5 ring-1 ring-[#7C3AED]/20">
        <div className="h-1.5 w-1.5 rounded-full bg-[#A78BFA]"></div>
        <span className="text-[13px] font-medium text-[#A78BFA]">
          목표 달성의 새로운 방법론
        </span>
      </div>

      {/* Title */}
      <h1 className="font-outfit max-w-4xl text-center text-5xl leading-[1.05] font-bold tracking-tight text-white md:text-[80px]">
        꿈을 9×9로
        <br />
        쪼개면, 현실이
        <br />
        된다
      </h1>

      <div className="h-6"></div>

      {/* Subtitle */}
      <p className="max-w-2xl text-center text-lg leading-relaxed text-zinc-400 md:text-[18px]">
        만다라트는 단 하나의 핵심 목표를 81개의 구체적인 행동 계획으로
        분해합니다. 일본 야구 선수 오타니 쇼헤이도 이 방법으로 목표를
        이뤘습니다.
      </p>

      <div className="h-10"></div>

      {/* CTA Buttons */}
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <Link
          href="/mandalart"
          className="rounded-xl bg-[#7C3AED] px-8 py-4 text-[17px] font-semibold text-white transition-all hover:bg-[#6D28D9]"
        >
          시작하기
        </Link>
        <TutorialButton />
      </div>

      {/* Mandalart */}
      <div className="mt-10 flex w-full items-center justify-center p-5">
        <Mandalart />
      </div>

      {/* App Preview Placeholder (nzGGa) */}
    </main>
  );
}
