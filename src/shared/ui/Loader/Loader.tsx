import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const Loader = () => (
  <div className="bg-gray w-full min-h-[calc(100vh-77px)] flex justify-center items-center">
    <DotLottieReact
      src={`${import.meta.env.BASE_URL}loading.lottie`}
      loop
      autoplay
      className="w-72 h-72"
    />
  </div>
);
