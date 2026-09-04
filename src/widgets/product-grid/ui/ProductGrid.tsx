import type { ReactNode } from "react";

interface ProductGridProps {
  children: ReactNode;
}

export const ProductGrid = ({ children }: ProductGridProps) => {
  return (
    <>
      <div className="py-1.75">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-2 w-[95%] mx-auto max-w-350">
          {children}
        </div>
      </div>
    </>
  );
};
