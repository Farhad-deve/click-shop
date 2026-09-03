import { useState, type MouseEvent, type TouchEvent } from "react";
import { BiSearch, BiX } from "react-icons/bi";

interface ImageZoomProps {
  src: string;
  alt: string;
  zoomLevel?: number;
}

export const ImageZoom = ({ src, alt, zoomLevel = 2 }: ImageZoomProps) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [backgroundPosition, setBackgroundPosition] = useState("center");

  const updatePosition = (clientX: number, clientY: number, rect: DOMRect) => {
    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
  };

  const handleMouseEnter = () => setIsZoomed(true);
  const handleMouseLeave = () => setIsZoomed(false);
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    updatePosition(e.clientX, e.clientY, e.currentTarget.getBoundingClientRect());
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setIsZoomed(true);
    const touch = e.touches[0];
    updatePosition(touch.clientX, touch.clientY, e.currentTarget.getBoundingClientRect());
  }
  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    updatePosition(touch.clientX, touch.clientY, e.currentTarget.getBoundingClientRect());
  }

  return (
    <div
      className={`relative w-full h-full overflow-hidden bg-white touch-none cursor-zoom-in`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-contain transition-opacity duration-300 ${
          isZoomed ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* When user hovers the image, this element appears and doubles the image size */}
      {isZoomed && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${src})`,
            backgroundPosition,
            backgroundSize: `${zoomLevel * 100}%`,
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      )}

      {/* Hint for users that says image is zoomable */}
      {!isZoomed && (
        <div
          className="absolute bottom-2.5 right-2.5 w-8 h-8 flex justify-center items-center bg-black/40 backdrop-blur-[2px] pointer-events-none rounded-md">
            <BiSearch />
        </div>
      )}

      {/* Close button appears when user touches the image, For mobile */}
      {isZoomed && (
        <button
          type="button"
          aria-label="Exit zoom"
          onClick={() => setIsZoomed(false)}
          className="absolute top-2.5 right-2.5 w-8 h-8 bg-black/40 flex justify-center items-center rounded-md backdrop-blur-[2px] active:scale-95 lg:hidden"
        >
          <BiX size={20} />
        </button>
      )}
    </div>
  );
};
