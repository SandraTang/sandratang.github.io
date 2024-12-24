import { useState, useRef, useEffect } from "react";

export default function Card({
  image,
  title,
  description,
  buttonText,
  buttonLink,
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
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [imageHeight, setImageHeight] = useState<number>(0);

  useEffect(() => {
    if (imageRef.current) {
      setImageHeight(imageRef.current.clientHeight);
    }
  }, [image]);

  return (
    <div className="relative group">
      <div
        className={`absolute hidden group-hover:block p-8 z-10 overflow-y-auto`}
        style={{ height: imageHeight }}
      >
        <div className="flex flex-col gap-2 text-white">
          {title && <p className="text-xl">{title}</p>}
          {buttonText && buttonLink && (
            <a href={buttonLink}>
              <button className="bg-white text-custom-black whitespace-nowrap">
                {buttonText}
              </button>
            </a>
          )}
          {description && <p>{description}</p>}
        </div>
      </div>
      {image && (
        <img
          src={image}
          alt="Card with information"
          className="group group-hover:brightness-50 rounded-md mb-2 object-cover min-h-[200px]"
          ref={imageRef}
        />
      )}
    </div>
  );
}
