export default function Landing() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div>
        <p className="text-2xl sm:text-4xl">
          Hi, I'm <span className="font-bold text-orange-500">Sandra Tang</span>
        </p>
        <ul className="list-disc list-inside">
          <li>San Francisco, CA</li>
          <li>MIT CS and Design</li>
          <li>Software Engineer</li>
        </ul>
      </div>
    </div>
  );
}
