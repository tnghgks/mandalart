"use client";

import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <nav className="fixed top-0 z-50 flex h-[72px] w-full items-center justify-between border-b border-white/5 bg-[#09090B]/80 px-6 backdrop-blur-md md:px-20">
      <div
        className="flex cursor-pointer items-center gap-2.5"
        onClick={() => router.push("/landing")}
      >
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

      <div className="flex gap-4">
        <button
          className="flex h-[42px] cursor-pointer items-center gap-2 rounded-lg bg-[#7C3AED] px-6 text-[15px] font-semibold text-white transition-all hover:bg-[#6D28D9]"
          onClick={() => router.push("/mandalart")}
        >
          만다라트
        </button>
        <button
          className="flex h-[42px] cursor-pointer items-center gap-2 rounded-lg bg-[#7C3AED] px-6 text-[15px] font-semibold text-white transition-all hover:bg-[#6D28D9]"
          onClick={() => router.push("/calendar")}
        >
          캘린더
        </button>
      </div>
    </nav>
  );
}
