import Card from "./card";

export default function MasonryLayout() {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
      <Card
        title="Resume"
        labels={["Professional Experience", "Education"]}
        image="/sandra_tang_resume.svg"
        description="I am seeking employment opportunities in software engineering."
      >
        <a href="/Sandra Tang Resume.pdf" download="Sandra Tang Resume.pdf">
          <button className="px-4 py-2 bg-orange-500 text-white rounded-md cursor-pointer">
            Download Resume PDF
          </button>
        </a>
      </Card>
      <Card
        title="Projects"
        subheadline="Summer 2024"
        labels={["React", "Next.js", "Tailwind CSS"]}
        description="I made things!"
        image="/dog.jpg"
        buttonText="View Project"
        buttonLink="https://www.google.com"
      />
      <Card>Projects</Card>
      <Card>Projects</Card>
      <Card>Projects</Card>
      <Card
        title="Projects"
        subheadline="Summer 2024"
        labels={["React", "Next.js", "Tailwind CSS"]}
        description="I made things!"
        buttonText="View Project"
        buttonLink="https://www.google.com"
      />
    </div>
  );
}
