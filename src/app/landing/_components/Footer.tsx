import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#09090B] px-6 py-20 md:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 grid gap-16 md:grid-cols-[280px_1fr]">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="grid h-7 w-7 grid-cols-2 gap-px overflow-hidden rounded-md bg-[#7C3AED] p-px">
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
              <Link href="#" className="text-sm text-zinc-400 hover:text-white">
                기능 소개
              </Link>
              <Link href="#" className="text-sm text-zinc-400 hover:text-white">
                사용 방법
              </Link>
              <Link href="#" className="text-sm text-zinc-400 hover:text-white">
                요금제
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-inter text-[13px] font-bold tracking-widest text-zinc-400 uppercase">
                리소스
              </h3>
              <Link href="#" className="text-sm text-zinc-400 hover:text-white">
                만다라트란?
              </Link>
              <Link href="#" className="text-sm text-zinc-400 hover:text-white">
                오타니의 만다라트
              </Link>
              <Link href="#" className="text-sm text-zinc-400 hover:text-white">
                블로그
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-inter text-[13px] font-bold tracking-widest text-zinc-400 uppercase">
                회사
              </h3>
              <Link href="#" className="text-sm text-zinc-400 hover:text-white">
                소개
              </Link>
              <Link href="#" className="text-sm text-zinc-400 hover:text-white">
                연락처
              </Link>
              <Link href="#" className="text-sm text-zinc-400 hover:text-white">
                개인정보처리방침
              </Link>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-[#18181B]"></div>

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
  );
}
