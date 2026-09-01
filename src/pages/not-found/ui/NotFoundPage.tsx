import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const NotFoundPage = () => {
  return (
    <>
      <div className="flex flex-col gap-2 items-center justify-center w-full min-h-[calc(100vh-77px)]">
        <DotLottieReact
          src="/not-found.lottie"
          loop
          autoplay
          className="w-120"
        />
        <h2 className="text-[clamp(1.5rem,1.3vw,2rem)]">Page not found!</h2>
      </div>
    </>
  );
};
