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
      <div className="absolute hidden group-hover:block h-full p-8 z-10">
        <div className="flex flex-col gap-2 text-white">
          {title && <p className="text-xl">{title}</p>}
          {description && (
            <p
              className="overflow-y-auto"
              style={{
                maxHeight: imageHeight ? `${imageHeight / 3}px` : "none",
              }}
            >
              {description}
            </p>
          )}
        </div>
        {buttonText && buttonLink && (
          <a href={buttonLink} className="absolute bottom-0 mb-8">
            <button className="bg-white text-custom-black whitespace-nowrap">
              {buttonText}
            </button>
          </a>
        )}
      </div>
      {image && (
        <img
          src={image}
          alt="Card image"
          className="group group-hover:brightness-50 rounded-md mb-2 object-cover min-h-[225px]"
          ref={imageRef}
        />
      )}
    </div>
  );
}
