import Logo from "./Assets/Images/logo.png";
import Image from "next/image";
import FontAwesomeIcon from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="fixed w-full top-px">
        <div className="flex justify-between items-center bg-navbar">
          <div className="flex ml-12 items-center">
            <Image
              className="cursor-pointer"
              src={Logo}
              width={60}
              height={60}
              alt="logo"
            />
            <h1 className="font-popin font-black cursor-pointer hover:text-kedua">L-Demy</h1>
          </div>
          <div className="flex mr-12 items-center">
            <div className="flex mr-16 gap-12 items-center">
              <div className="flex gap-1 items-center">
                <svg id="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#42C2FF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-home"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <a href="/" className="font-inter hover:text-kedua" id="a">
                  Home
                </a>
              </div>
              <div className="flex items-center gap-1">
                <svg id="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#42C2FF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-book-open"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
                <a href="/academy" className="font-inter hover:text-kedua" id="a">
                  Academy
                </a>
              </div>
              <div className="flex items-center gap-1">
              <svg id="svg"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#42C2FF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-user"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <Link href={`/profile`} className="hover:text-kedua" id="a">
              Profile
              </Link>
              </div>
            </div>
            <div className="flex gap-3">
              <Link href={"/Populer"}>
                <button className="bg-hover font-inter rounded-lg text-white px-4 py-2 hover:bg-blue-500 font-semibold">
                  Log-in
                </button>
              </Link>
              <button className="border border-solid font-inter border-black rounded-lg px-4 py-2 hover:bg-black hover:border-white hover:text-white font-semibold">
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
