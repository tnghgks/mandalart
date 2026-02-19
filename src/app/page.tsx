import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Grid } from "@/components/Grid";
import { Box } from "@/components/Box";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#09090B] font-sans text-white selection:bg-[#7C3AED] selection:text-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 z-50 flex h-[72px] w-full items-center justify-between border-b border-white/5 bg-[#09090B]/80 px-6 backdrop-blur-md md:px-20">
        <div className="flex items-center gap-2.5">
          <div className="grid h-8 w-8 grid-cols-2 gap-[1px] overflow-hidden rounded-md bg-[#7C3AED] p-[1px]">
            <div className="rounded-[1px] bg-white"></div>
            <div className="rounded-[1px] bg-white/20"></div>
            <div className="rounded-[1px] bg-white/20"></div>
            <div className="rounded-[1px] bg-white/20"></div>
          </div>
          <span className="font-outfit text-lg font-bold tracking-tight text-white">
            Mandalart
          </span>
        </div>

        <button className="group flex h-[42px] items-center gap-2 rounded-lg bg-[#7C3AED] px-6 text-[15px] font-semibold text-white transition-all hover:bg-[#6D28D9]">
          시작하기
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center pt-[192px] pb-20">
        {/* Badge */}
        <div className="mb-6 flex items-center gap-2 rounded-full bg-[#1C1027] px-4 py-1.5 ring-1 ring-[#7C3AED]/20">
          <div className="h-1.5 w-1.5 rounded-full bg-[#A78BFA]"></div>
          <span className="text-[13px] font-medium text-[#A78BFA]">
            목표 달성의 새로운 방법론
          </span>
        </div>

        {/* Title */}
        <h1 className="max-w-4xl text-center font-outfit text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-[80px]">
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
          <button className="rounded-xl bg-[#7C3AED] px-8 py-4 text-[17px] font-semibold text-white transition-all hover:bg-[#6D28D9]">
            시작하기
          </button>
          <button className="flex items-center gap-2 rounded-xl bg-[#18181B] px-8 py-4 text-[17px] font-medium text-zinc-400 transition-all hover:bg-[#27272A] hover:text-white">
            예시 보기 →
          </button>
        </div>

        <div className="h-[60px]"></div>

        {/* App Preview Placeholder (nzGGa) */}
        <Grid className="h-[960px] w-full max-w-[1280px] bg-[#18181B]">
          <Grid className="h-full w-full bg-[#18181B] rounded-[16px] p-0">
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-[#7C3AED]"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
          </Grid>
          <Grid className="h-full w-full bg-[#18181B] rounded-[16px] p-0">
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-[#7C3AED]"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
          </Grid>
          <Grid className="h-full w-full bg-[#18181B] p-0">
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-[#7C3AED]"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
          </Grid>
          <Grid className="h-full w-full bg-[#18181B] p-0">
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-[#7C3AED]"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
          </Grid>
          <Grid className="h-full w-full bg-[#18181B] p-0">
            <Box className="h-full w-full bg-gray-500"></Box>
            <Box className="h-full w-full bg-gray-500"></Box>
            <Box className="h-full w-full bg-gray-500"></Box>
            <Box className="h-full w-full bg-gray-500"></Box>
            <Box className="h-full w-full bg-[#7C3AED]"></Box>
            <Box className="h-full w-full bg-gray-500"></Box>
            <Box className="h-full w-full bg-gray-500"></Box>
            <Box className="h-full w-full bg-gray-500"></Box>
            <Box className="h-full w-full bg-gray-500"></Box>
          </Grid>
          <Grid className="h-full w-full bg-[#18181B] p-0">
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-[#7C3AED]"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
          </Grid>
          <Grid className="h-full w-full bg-[#18181B] p-0">
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-[#7C3AED]"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
          </Grid>
          <Grid className="h-full w-full bg-[#18181B] p-0">
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-[#7C3AED]"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
          </Grid>
          <Grid className="h-full w-full bg-[#18181B] p-0">
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-[#7C3AED]"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
            <Box className="h-full w-full bg-gray-400"></Box>
          </Grid>
        </Grid>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#09090B] px-6 py-20 md:px-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-20 grid gap-16 md:grid-cols-[280px_1fr]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2.5">
                <div className="grid h-7 w-7 grid-cols-2 gap-[1px] overflow-hidden rounded-md bg-[#7C3AED] p-[1px]">
                  <div className="rounded-[1px] bg-white"></div>
                  <div className="rounded-[1px] bg-white/20"></div>
                  <div className="rounded-[1px] bg-white/20"></div>
                  <div className="rounded-[1px] bg-white/20"></div>
                </div>
                <span className="font-outfit text-base font-bold text-white">
                  Mandalart
                </span>
              </div>
              <p className="text-sm leading-relaxed text-zinc-400">
                꿈을 81개의 행동으로 분해하는
                <br />
                목표 달성 플래너
              </p>
            </div>

            <div className="grid grid-cols-2 gap-10 md:grid-cols-3 md:gap-16">
              <div className="flex flex-col gap-4">
                <h3 className="font-inter text-[13px] font-bold tracking-widest text-zinc-400 uppercase">
                  제품
                </h3>
                <Link
                  href="#"
                  className="text-sm text-zinc-400 hover:text-white"
                >
                  기능 소개
                </Link>
                <Link
                  href="#"
                  className="text-sm text-zinc-400 hover:text-white"
                >
                  사용 방법
                </Link>
                <Link
                  href="#"
                  className="text-sm text-zinc-400 hover:text-white"
                >
                  요금제
                </Link>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="font-inter text-[13px] font-bold tracking-widest text-zinc-400 uppercase">
                  리소스
                </h3>
                <Link
                  href="#"
                  className="text-sm text-zinc-400 hover:text-white"
                >
                  만다라트란?
                </Link>
                <Link
                  href="#"
                  className="text-sm text-zinc-400 hover:text-white"
                >
                  오타니의 만다라트
                </Link>
                <Link
                  href="#"
                  className="text-sm text-zinc-400 hover:text-white"
                >
                  블로그
                </Link>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="font-inter text-[13px] font-bold tracking-widest text-zinc-400 uppercase">
                  회사
                </h3>
                <Link
                  href="#"
                  className="text-sm text-zinc-400 hover:text-white"
                >
                  소개
                </Link>
                <Link
                  href="#"
                  className="text-sm text-zinc-400 hover:text-white"
                >
                  연락처
                </Link>
                <Link
                  href="#"
                  className="text-sm text-zinc-400 hover:text-white"
                >
                  개인정보처리방침
                </Link>
              </div>
            </div>
          </div>

          <div className="h-[1px] w-full bg-[#18181B]"></div>

          <div className="flex flex-col items-start justify-between gap-4 pt-12 md:flex-row md:items-center">
            <span className="text-[13px] text-zinc-500">
              © 2025 Mandalart. All rights reserved.
            </span>
            <span className="text-[13px] text-[#7C3AED]">
              Made with ♥ for goal achievers
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
