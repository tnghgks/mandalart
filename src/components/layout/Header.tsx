import Link from "next/link";

export default function Header() {
  return (
    <nav className="fixed top-0 z-50 flex h-[72px] w-full items-center justify-between border-b border-white/5 bg-[#09090B]/80 px-6 backdrop-blur-md md:px-20">
      <Link
        className="flex cursor-pointer items-center gap-2.5"
        href="/landing"
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
      </Link>

      <div className="flex gap-4">
        <Link
          href="/mandalart"
          className="flex h-[42px] cursor-pointer items-center gap-2 rounded-lg bg-[#7C3AED] px-6 text-[15px] font-semibold text-white transition-all hover:bg-[#6D28D9]"
        >
          만다라트
        </Link>
        <Link
          href="/calendar"
          className="flex h-[42px] cursor-pointer items-center gap-2 rounded-lg bg-[#7C3AED] px-6 text-[15px] font-semibold text-white transition-all hover:bg-[#6D28D9]"
        >
          캘린더
        </Link>
      </div>
    </nav>
  );
}
