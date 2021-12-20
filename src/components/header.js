import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
function Header() {
  const { data: session } = useSession();
  return (
    <>
      <div className="overflow-hidden">
        <div className="flex items-center bg-black p-1 flex-grow py-1">
          <div className="mt-1 flex items-center flex-grow sm:flex-grow-0">
            <Image
              src="https://raw.githubusercontent.com/selvaganapathyvikki/image-store/main/mainlogo.jpg"
              width={150}
              height={40}
              alt="Picture of the author"
              objectFit="contain"
              className="cursor-pointer fixed min-w-150 min-h-40 mt-0"
            />
          </div>
          <div className="hidden sm:flex items-center rounded-md h-10 my-2 space-x-1 sm:flex-grow">
            <input
              type="text"
              className="h-8 w-6 flex-grow flex-shrink p-4 rounded-md focus:outline-none m-0"
              name=""
              id=""
              placeholder="Search for products,brands and more  "
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 mr-1 w-6 border-black  cursor-pointer bg-white rounded-md hover:bg-black hover:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          {/* <div className="text-white flex text-sm font-extralight sm:font-extrabold mx-0 sm:mx-6 whitespace-nowrap mt-3 space-x-0 sm:space-x-6 sm:text-base"> */}
          <div className="text-white flex flex-row justify-between space-x-2 sm:w-96 items-center px-5">
            <div className="font-extrabold text-base hover:text-gray-300 cursor-pointer">
              <p>Orders</p>
            </div>
            <div className="font-sans block text-white hover:text-gray-300 cursor-pointer">
              <a href="#" role="button" className="relative flex">
                <p className="hidden md:flex md:mt-1 font-extrabold text-base">
                  Cart
                </p>
                <svg
                  className="flex-1 w-8 h-8 fill-current ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                </svg>
                <span className="absolute right-0 top-0 rounded-full bg-blue-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                  5
                </span>
              </a>
            </div>
            <div className="font-extrabold text-base">
              {session ? (
                <img className="user-label" src={session.user.image} />
              ) : (
                <button onClick={signIn} className="button-signin">
                  SignUp
                </button>
              )}
            </div>
            <div className=" font-extrabold text-base ml-0">
              {session ? (
                <button onClick={signOut} className="button-signin">
                  Logout
                </button>
              ) : (
                <button onClick={signIn} className="button-login">
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
        {/* <div className="flex flex-wrap justify-items-end items-center bg-gray-300 mx-3 h-10 flex-grow pl-5 space-x-2 md:space-x-5 sm:space-x-5 margin-2 lg:space-x-5  "> */}
        <div className=" h-10 w-full flex items-center flex-row justify-between bg-gray-300 px-1 sm:px-5">
          <p className="link">All</p>
          <p className="link">Mobiles</p>
          <p className="link">Electronics</p>
          <p className="link">Computers</p>
          <p className="link hidden lg:flex">Home&Kitchen</p>
          <p className="link hidden md:flex">Men's</p>
          <p className="link hidden md:flex">Women's </p>
          <p className="link">Kids</p>
          <p className="link">Beauty</p>
          <p className="link hidden sm:flex">Stationery</p>
          <p className="link hidden sm:flex">Appliances</p>
        </div>
      </div>
    </>
  );
}

export default Header;
