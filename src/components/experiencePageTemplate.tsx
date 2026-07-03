import { ReactNode } from "react";
import { Link } from "react-router-dom";
import NavBar from "./navBar";

type ExperiencePageAction = {
  href: string;
  label: string;
  external?: boolean;
};

type ExperiencePageTemplateProps = {
  title: string;
  media?: ReactNode;
  actions?: ExperiencePageAction[];
  children: ReactNode;
};

function ExperiencePageTemplate({
  title,
  media,
  actions = [],
  children,
}: ExperiencePageTemplateProps) {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <NavBar alwaysVisible />
      <main className="mx-auto flex w-full max-w-[1200px] flex-col gap-12 px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
        <section className="flex flex-col items-center gap-8">
          <h1 className="max-w-[900px] text-center text-4xl sm:text-5xl">
            {title}
          </h1>
        </section>

        <section className="flex justify-center">
          <div className="w-full max-w-[760px] text-left text-base leading-8">
            {children}
          </div>
        </section>

        {(media || actions.length > 0) && (
          <section className="flex flex-col gap-6">
            {media}
            {actions.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {actions.map((action) =>
                  action.external ? (
                    <a
                      key={`${action.href}-${action.label}`}
                      href={action.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-md border border-black/10 px-4 py-2 text-sm font-medium text-black/70 transition-colors hover:border-black/20 hover:text-black"
                    >
                      {action.label}
                    </a>
                  ) : (
                    <Link
                      key={`${action.href}-${action.label}`}
                      to={action.href}
                      className="inline-flex items-center rounded-md border border-black/10 px-4 py-2 text-sm font-medium text-black/70 transition-colors hover:border-black/20 hover:text-black"
                    >
                      {action.label}
                    </Link>
                  )
                )}
              </div>
            )}
          </section>
        )}
      </main>
    </div>
  );
}

export type { ExperiencePageAction, ExperiencePageTemplateProps };
export default ExperiencePageTemplate;
