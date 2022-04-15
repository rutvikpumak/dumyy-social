import React from "react";

export function Login() {
  return (
    <div className="w-full h-screen text-gray-800  px-4 py-6 flex flex-col justify-center sm:py-12">
      <div className="w-2/5 py-3 sm:max-w-xl mx-auto text-center md:w-3/4">
        <div className="mt-4 bg-white shadow-md sm:rounded-lg text-left">
          <div className="h-2 bg-blue-500 rounded-t-md"></div>
          <div className="px-12 py-8">
            <span className="text-2xl font-light text-center">Sign In</span>
            <div className="pt-8">
              <label className="block font-semibold">Username or Email</label>
              <input
                type="text"
                placeholder="Email"
                className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-md"
              />
              <label className="block mt-3 font-semibold">Password</label>
              <input
                type="password"
                placeholder="Password"
                className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-md"
              />
              <div>
                <button className="font-semibold w-full my-6 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-400">
                  Sign In With Test
                </button>
              </div>
              <div className="text-center  font-semibold">
                <p className="cursor-pointer hover:underline">Create New Account</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
