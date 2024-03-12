import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSingnInForm] = useState(true);
  console.log("initial ", isSignInForm);
  const togglSinInForm = () => {
    setIsSingnInForm(!isSignInForm);
    console.log(isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="sign-up"
        />
      </div>
      <form className="w-3/12 absolute text-white p-12 bg-black my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (<input
          type="text"
          placeholder="Full Name"
          className="p-3 my-4 w-full bg-gray-700 rounded-sm"
        />)}
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 my-4 w-full bg-gray-700 rounded-sm"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-4 w-full bg-gray-700 rounded-sm"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={togglSinInForm}>
          {isSignInForm
            ? "New to Newtflix? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
