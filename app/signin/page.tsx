"use client";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { useGlobalContext } from "@/helper/context";
import { signIn } from "next-auth/react";

const page = () => {
  // const { loginUser } = useGlobalContext();
  const router = useRouter();
  const [seePass, setSeePass] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const handleChnage = (e: any) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    signIn("credentials", {
      ...userInfo,
      redirect: false,
    }).then((callback) => {
      if (callback?.ok) {
        router.push("/");
        setUserInfo({
          email: "",
          password: "",
        });
      }

      if (callback?.error) {
        console.log(callback.error);
      }
    });
  };

  return (
    <div className="signin w-full h-full flex items-center justify-center text-black">
      <div className="form text-center lg:w-96 w-full bg-white p-6 rounded-xl">
        <h3 className="font-semibold text-2xl ">Login</h3>
        <form>
          <Input
            type="text"
            placeholder="enter your email"
            name="email"
            value={userInfo.email}
            onChange={(e) => handleChnage(e)}
          />
          <Input
            type={seePass ? "text" : "password"}
            placeholder="enter your password"
            name="password"
            value={userInfo.password}
            onChange={(e) => handleChnage(e)}
            elem={
              seePass ? (
                <AiFillEye size={25} onClick={() => setSeePass(!seePass)} />
              ) : (
                <AiFillEyeInvisible
                  size={25}
                  onClick={() => setSeePass(!seePass)}
                />
              )
            }
            elemClass={
              "text-black absolute right-[20px] top-1/2 -translate-y-1/2"
            }
          />
          <Button
            onClick={(e) => handleSubmit(e)}
            btnTitle={"SignIn"}
            disabled={!userInfo.password && !userInfo.email}
            cssClass={
              "w-full bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50 text-white py-2.5 rounded"
            }
          />
          {/* Horizontal line */}
          <div className="bg-black h-[1px] w-full my-2"></div>

          <div className="w-full bg-white border-2 p-[0.7rem] my-4 rounded-md outline-none text-black text-md shadow-[0px 1px 15px rgba(0, 0, 0, 0.2)] ">
            SignIn With Google
          </div>
          <div className="w-full bg-white border-2 p-[0.7rem] my-4 rounded-md outline-none text-black text-md shadow-[0px 1px 15px rgba(0, 0, 0, 0.2)] ">
            SignIn With Github
          </div>
          <p className="mt-4">Don't have an account ?</p>
          <Link href={"/signup"}>Register Here</Link>
        </form>
      </div>
    </div>
  );
};

export default page;
