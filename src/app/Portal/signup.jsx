import Logo from "@/app/Assets/Images/logo.png";
import Image from "next/image";

const Sign = () => {
    return (
      <form className="flex justify-center h-screen items-center">
          <div className="border border-solid border-black rounded-xl p-12">
              <div className="flex justify-center mb-6 items-center mr-6">
                <Image src={Logo} alt="Logo" width={60} height={60} />
                  <h1 className="font-bold text-2xl font-popin hover:text-kedua cursor-pointer">Sign-Up</h1>
              </div>
              <div className="flex flex-col gap-5">
                  <div>
                      <input
                          type="text"
                          placeholder="Username"
                          className="rounded-full px-4 py-2 border border-solid border-black"
                      />
                  </div>
                  <div className="flex">
                      <input
                          type="email"
                          placeholder="Email"
                          className="rounded-full px-4 py-2 border border-solid border-black"
                      />
                  </div>
                  <div className="flex">
                      <input
                          type="password"
                          placeholder="Password"
                          className="rounded-full px-4 py-2 border border-solid border-black"
                      />
                  </div>
              </div>
              <div className="flex justify-center mt-10">
                  <button className="bg-hover text-white font-semibold text-md font-popin hover:bg-blue-500 rounded-full px-4 py-1 w-submit">
                      Submit
                  </button>
              </div>
          </div>
      </form>
    );
  }

  export default Sign;