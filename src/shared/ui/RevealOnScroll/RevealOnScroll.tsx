import type { ReactNode } from "react";
import { useIntersectionObserver } from "../../lib/hooks";

interface RevealOnScrollProps {
  children: ReactNode;
}

export const RevealOnScroll = ({ children }: RevealOnScrollProps) => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <>
      <div
        ref={ref}
        className={`transition-all duration-500 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {children}
      </div>
    </>
  );
};
