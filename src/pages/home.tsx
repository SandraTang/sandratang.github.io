import Experiences from "../components/experiences";
import Landing from "../components/landing";
import SoftwareCareerOverview from "../components/softwareCareerOverview";
import StatsOverview from "../components/statsOverview";

export default function Home({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <div className="justify-items-center px-8 pb-20 sm:px-20 sm:pb-20 lg:px-48">
      <main className="flex w-full flex-col items-center">
        <Landing isDarkMode={isDarkMode} />
        <StatsOverview />
        <SoftwareCareerOverview />
        <Experiences />
      </main>
    </div>
  );
}
