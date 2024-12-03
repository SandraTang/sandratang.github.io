import Card from "./card";

export default function Projects() {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
      <Card
        title="Projects"
        subheadline="Summer 2024"
        labels={["React", "Next.js", "Tailwind CSS"]}
        description="I made things!"
        image="/globe.svg"
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
