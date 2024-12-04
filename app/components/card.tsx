export default function Card({
  children,
  image,
  title,
  subheadline,
  description,
  buttonText,
  buttonLink,
  labels,
}: {
  children?: React.ReactNode;
  image?: string;
  title?: string;
  subheadline?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  labels?: string[];
}) {
  return (
    <div className="border border-gray-300 rounded-lg p-4 mb-4 flex flex-col gap-3 break-inside-avoid">
      {image && (
        <img src={image} alt="Card image" className="rounded-md mb-2" />
      )}
      {title && <h2 className="text-lg font-bold">{title}</h2>}
      {subheadline && <h3 className="text-md font-semibold">{subheadline}</h3>}
      {labels && (
        <div className="flex flex-wrap gap-2">
          {labels.map((label, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
            >
              {label}
            </span>
          ))}
        </div>
      )}
      {description && <p>{description}</p>}
      {children}
      {buttonText && buttonLink && (
        <a href={buttonLink}>
          <button>{buttonText}</button>
        </a>
      )}
    </div>
  );
}
