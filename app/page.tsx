import Image from "next/image";
import Landing from "./components/landing";
import MasonryLayout from "./components/masonryLayout";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-circular-medium)]">
      <main className="flex flex-col w-full items-center mt-[20vh]">
        <Landing />
        <MasonryLayout />
      </main>
    </div>
  );
}