import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.svg";
import SignInImage from "../assets/signin.svg";
import Image from "next/image";
import { postDataAuth } from "../hooks/postData";
import { useRouter } from "next/router";

export default function SignIn() {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.replace("/");
    }
  }, []);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const readyToSubmit = email === "" || password === "";

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      const token = await postDataAuth("/auth/login", {
        email: email,
        password: password,
      });
      localStorage.setItem("token", token);
      router.replace("/");
    } catch (err: any) {
      setError(err.message);
      console.log(err);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="relative overflow-hidden h-screen w-screen bg-white flex flex-row justify-between items-center">
      <div className="flex flex-col items-start justify-center pl-32 w-2/4 gap-12">
        <Image priority src={Logo} alt="" className="w-24" />
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-2">
            <p className="text-sm">Email or matricule</p>
            <input
              type="text"
              placeholder="email@etu.usthb.dz"
              className="w-full outline-none border border-stroke rounded-md px-4 p-2"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-end w-full">
            <div className="flex flex-col gap-2 w-full">
              <p className="text-sm">Password</p>
              <input
                type="password"
                placeholder="● ● ● ● ● ● ● ●"
                className="w-full outline-none border border-stroke rounded-md px-4 p-2 "
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error !== "" ? (
              <div className="flex flex-row justify-start w-full">
                <p className="text-sm text-red">{error}</p>
              </div>
            ) : null}
            <a href="" className="text-blueMain font-semibold text-xs">
              forgot password ?
            </a>
          </div>
        </div>
        <button
          disabled={readyToSubmit || isSubmitting}
          onClick={handleSubmit}
          className="bg-blueMain rounded-md text-white font-semibold w-full py-2 disabled:bg-desactiveColor relative"
        >
          <span className="flex items-center justify-center">
            {isSubmitting && (
              <svg
                className="animate-spin h-5 w-5 mr-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 004 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM12 20a8 8 0 110-16v2a6 6 0 100 12v2z"
                ></path>
              </svg>
            )}
            Sign In
          </span>
        </button>
      </div>
      <Image src={SignInImage} alt="" className="h-full absolute right-[-2%]" />
    </div>
  );
}
