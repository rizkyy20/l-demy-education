import Navbar from "@/app/navbar"

const Academy = () => {
  return (
    <>
    <Navbar/>
      <div className="h-screen">
        <div className="flex flex-col items-center justify-center">
            <div className="bg-hover text-white rounded py-8 w-1/2 mt-8">
                <div>
                    <h1 className="font-inter text-center font-bold md:text-2xl">TASK COLLECTION</h1>
                    <div className="flex flex-col items-center mt-8">
                    <p className="text-center">Please upload your assignment</p>
                    <div className="flex justify-center">
                    <input type="file" className="mt-4 w-36" />
                    </div>
                    </div>
                </div>
            </div>
            <div className="bg-hover text-white rounded py-8 w-1/2 mt-8">
            <h1 className="font-inter text-center font-bold md:text-2xl mb-4">LET'S DISCUSSION</h1>
            <div className="flex justify-center">
                <textarea placeholder="ask for anything?" className="rounded-full shadow appearance-none border rounded w-1/2 md:h-48 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500 resize-y"></textarea>
            </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Academy;
