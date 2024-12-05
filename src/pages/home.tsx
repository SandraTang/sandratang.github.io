import Landing from "../components/landing";
import MasonryLayout from "../components/masonryLayout";

export default function Home({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <div className="justify-items-center pb-20 gap-16 p-8 sm:p-20 sm:py-20 lg:px-48 font-[family-name:var(--font-circular-medium)]">
      <main className="flex flex-col w-full items-center mt-[20vh]">
        <Landing isDarkMode={isDarkMode} />
        <MasonryLayout isDarkMode={isDarkMode} />
      </main>
    </div>
  );
}
