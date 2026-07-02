import { useEffect, useRef, useState } from "react";

type StatItem = {
  value: number;
  label: string;
  suffix: string;
};

const stats: StatItem[] = [
  {
    value: 75,
    label: "games created",
    suffix: "+",
  },
  {
    value: 1000000,
    label: "plays",
    suffix: "+",
  },
];

function StatsOverview() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<number[]>(
    stats.map(() => 0)
  );

  useEffect(() => {
    if (!sectionRef.current || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setHasAnimated(true);
      },
      { threshold: 0.35 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated, stats]);

  useEffect(() => {
    if (!hasAnimated) return;

    const durationMs = 1200;
    const startTime = performance.now();

    const tick = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / durationMs, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setAnimatedValues(
        stats.map((stat) => Math.round(stat.value * easedProgress))
      );

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    const animationFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrame);
  }, [hasAnimated, stats]);

  return (
    <section
      ref={sectionRef}
      className="mb-[100px] flex w-full max-w-[760px] flex-col gap-5"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {stats.map((stat, index) => (
          <div key={stat.label} className="px-1 py-2 text-left">
            <p className="text-4xl font-semibold sm:text-5xl">
              {animatedValues[index].toLocaleString()}
              {stat.suffix}
            </p>
            <p className="mt-2 text-base text-black/70">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsOverview;
