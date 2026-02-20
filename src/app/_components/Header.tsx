import { ArrowRight } from "lucide-react";

export default function Header() {
  return (
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
  );
}
