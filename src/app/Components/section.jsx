import Image from "next/image";
import Belajar from "@/app/Assets/Images/belajar 2.png"

const Section = () => {
    return (
            <div className="bg-hover text-white mt-12 flex gap-12 justify-center py-6 mb-28">
                <div className="text-start flex flex-col justify-center sm:ml-8">
                    <h1 className="font-bold font-inter lg:text-4xl md:text-2xl text-xl">WELCOME TO L-DEMY ACCOUNT</h1>
                    <p className="lg:text-xl md:text-md text-sm mt-4">L-Demy accounts are given to anyone who <br></br> is still a high school student and a student</p>
                    <p className="lg:text-xl md:text-md text-sm mt-4">With an L-Demy account, you can access various <br></br> materials and courses, and make it easier for you <br></br> to study. You can also access L-Demy anywhere and <br></br> anytime</p>
                </div>
                <div>
                    <Image alt="belajar" src={Belajar} id="gambarbljr" width={400} height={400} />
                </div>
            </div>
    )
}

export default Section;