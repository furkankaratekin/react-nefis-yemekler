import React from 'react'
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div
        className="md:w-1/2 bg-cover bg-center  "
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/delicious-burger-nature_23-2150902280.jpg?t=st=1715874778~exp=1715878378~hmac=594b8e7ddc495f3f504b6f4a7f0131361cce01a2ad75102f28a65a7be4ac19f0&w=996')",
        }}
      ></div>
      <div className="md:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <Link to="/">
              <img
                className="mx-auto h-12 w-auto"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png"
                alt="Logo"
              />
            </Link>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Welcome
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Please enter your contact details to connect.
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="user-name" className="sr-only">
                  Username
                </label>
                <input
                  id="user-name"
                  name="username"
                  type="username"
                  autoComplete="username"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Name
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div>
                <label htmlFor="confirm-password" className="sr-only">
                  Password
                </label>
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="confirm-password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Confirm Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign Up
              </button>
            </div>

            <Link to="/login">
              <div className="text-center mt-4">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Already have account ? Log in
                </a>
              </div>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp
