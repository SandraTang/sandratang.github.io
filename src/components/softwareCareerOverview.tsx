interface InfoPillItem {
  imageUrl: string;
  title: string;
  tooltip: string;
  href?: string;
}

function SoftwareCareerOverview() {
  const infoPillItems: InfoPillItem[] = [
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/MIT_logo_2003-2023.svg/3840px-MIT_logo_2003-2023.svg.png?utm_source=wikitech.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
      title: "MIT '23",
      tooltip:
        "MIT Class of 2023 Computer Science + Design Minor + Chinese Concentration",
    },
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/b2/Y_Combinator_logo.svg",
      title: "YC S25",
      tooltip: "AgentHub YC S25",
    },
    {
      imageUrl:
        "https://media.licdn.com/dms/image/v2/C560BAQGOellJMb-77g/company-logo_200_200/company-logo_200_200/0/1660015054353/buildprod_logo?e=2147483647&v=beta&t=Q9SCmxFFtk1RrjtIUrJhHPRXWsAYZOyH8M_89BzsyOs",
      title: "Prod.so",
      tooltip:
        "Prod.so Cohort 2. Prod is an exclusive MIT, Harvard, and Stanford startup accelerator, boasting an alumni portfolio that includes multi-billion-dollar startups like Mercor, Cursor, and Etched.",
      href: "https://prod.so/",
    },
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/4/42/Mit-system-lab-logo.jpg/250px-Mit-system-lab-logo.jpg",
      title: "MIT SSL",
      tooltip: "MIT Space Systems Laboratory",
      href: "https://en.wikipedia.org/wiki/Space_Systems_Laboratory_(MIT)",
    },
    {
      imageUrl: "/logos-small/mit-url.png",
      title: "MIT URL",
      tooltip: "MIT Urban Risk Lab",
      href: "https://urbanrisklab.org/",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="font-bold" style={{ color: "#B5A18D" }}>
        Software Career Overview
      </p>
      <div
        className="inline-flex w-fit items-center gap-8 self-center rounded-full"
        style={{ padding: 10 }}
      >
        {infoPillItems.map((item) => (
          <div
            key={item.title}
            className="group relative flex w-20 items-center justify-center"
          >
            <div className="pointer-events-none absolute bottom-full left-1/2 mb-2 hidden w-[200px] -translate-x-1/2 rounded-md bg-black px-3 py-2 text-center text-xs text-white group-hover:block">
              <p className="font-bold">{item.title}</p>
              <p className="font-normal">{item.tooltip}</p>
            </div>
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.title}
                className="flex items-center justify-center"
              >
                <img
                  src={item.imageUrl}
                  alt={`${item.title} logo`}
                  className="h-12 w-auto object-contain"
                />
              </a>
            ) : (
              <div className="flex items-center justify-center">
                <img
                  src={item.imageUrl}
                  alt={`${item.title} logo`}
                  className="h-12 w-auto object-contain"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SoftwareCareerOverview;
