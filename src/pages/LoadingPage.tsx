import { DotLottieReact } from "@lottiefiles/dotlottie-react"


const LoadingPage = () => {
  return (
    <>
      <div className="">
        <div>
          <DotLottieReact
            src="/loading.lottie"
            loop
            autoplay
          />
        </div>
      </div>
    </>
  )
}

export default LoadingPage