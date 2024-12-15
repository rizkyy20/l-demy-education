import Navbar from "./navbar";

const Main = () => {
  return (
    <div className="flex justify-center h-screen">
      <div className="mt-72">
        <h1 className="font-inter font-black lg:text-4xl md:text-2xl sm:text-xl text-center tracking-widest">
          WELCOME PIOONER
        </h1>
        <p className="mt-3 font-thin sm:text-sm md:text-md lg:text-lg">
          enjoy and use the <span className="text-kedua">L-demy</span> app for the purpose of learning and entertainment at various times and places
        </p>
        <div className="flex justify-center mt-4">
          <button className="hover:w-48 transition-all  bg-hover hover:bg-blue-500 py-3 rounded-md w-44 font-semibold font-popin tracking-wide text-white">
            Let's learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
