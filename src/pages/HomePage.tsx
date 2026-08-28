import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <>
        <main>


            <div>
                <h1 className="text-[30px] md:text-[40px] lg:text-[45px] font-bold leading-9 md:leading-12.5 lg:leading-13.75 text-center mx-[5%] text-indigo-700 drop-shadow-md max-w-250">Find life-easing technologies only at Click Shop!</h1>
                <p className="text-gray-600 font-medium text-center max-w-175 mx-[5%] text-[12px] md:text-[14px]">
                    We have the latest smartphones, modern laptops, computers, and various accessories. Only with us you can buy quality technology at affordable prices!
                </p>
                {/* <Link to="/products">
                    <button>
                        Get Started
                    </button>
                </Link> */}
            </div>
        </main>
    </>
  )
}

export default HomePage