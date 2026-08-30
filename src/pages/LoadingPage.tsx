import { DotLottieReact } from "@lottiefiles/dotlottie-react"


const LoadingPage = () => {
  return (
    <>
      <div className="bg-gray w-full h-full flex justify-center items-center">
        <div>
          <DotLottieReact
            src="/loading.lottie"
            loop
            autoplay
            className="w-[18rem] h-[18rem]"
          />
        </div>
      </div>
    </>
  )
}

export default LoadingPage