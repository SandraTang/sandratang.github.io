export default function Resume() {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-center">
        <a href="/Sandra Tang Resume.pdf" download="Sandra Tang Resume.pdf">
          <button className="px-4 py-2 bg-orange-500 text-white rounded-md cursor-pointer">
            Download Resume
          </button>
        </a>
      </div>
      <iframe
        src="/Sandra Tang Resume.pdf#toolbar=0"
        width="100%"
        height="100%"
        className="border-none"
        title="Sandra Tang Resume"
      ></iframe>
    </div>
  );
}
