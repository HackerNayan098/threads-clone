"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Link from "next/link";
import Input from "@/components/Input";
import Button from "@/components/Button";

const page = () => {
  const router = useRouter();
  const [seePass, setSeePass] = useState(false);
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    signIn("credentials", { ...userInfo, redirect: false }).then((callback) => {
      if (callback) {
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
      }
    });
  };

  return (
    <div className="w-full h-full flex items-center justify-center text-black ">
      <div className="lg:w-96 w-full bg-white p-6 rounded-xl text-center">
        <h3 className="font-semibold tex-2xl">Login</h3>
        <form>
          <Input
            type="email"
            placeholder="enter your email"
            name="email"
            value={userInfo.email}
            onChange={(e) => handleChange(e)}
          />
          <Input
            type={seePass ? "text" : "password"}
            placeholder="enter your password"
            name="password"
            value={userInfo.password}
            onChange={(e) => handleChange(e)}
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
          />
          <Button
            btnTitle="Login"
            disabled={!userInfo.password && !userInfo.email}
            btnCss="w-full bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50 text-white py-2.5 rounded"
            onClick={(e) => {
              handleSubmit(e);
            }}
          />

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
