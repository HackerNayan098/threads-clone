"use client";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

const page = () => {
  const router = useRouter();
  const [seePass, setSeePass] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChnage = (e: any) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(name, value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/user/login", user);
      console.log("Signup success", response.data);
      router.push("/");
    } catch (error: any) {
      console.log("signup failed", error.message);
    }
  };

  return (
    <div className="signin w-full h-full flex items-center justify-center">
      <div className="form text-center lg:w-96 w-full bg-white p-6 rounded-xl">
        <h3 className="font-semibold text-2xl">Login</h3>
        <form>
          <Input
            type="text"
            placeholder="enter your email"
            name="email"
            value={user.email}
            onChange={(e) => handleChnage(e)}
          />
          <Input
            type={seePass ? "text" : "password"}
            placeholder="enter your password"
            name="password"
            value={user.password}
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
          />
          <Button
            onClick={(e) => handleSubmit(e)}
            btnTitle={"SignIn"}
            cssClass={"w-full bg-blue-500 text-white py-2.5 rounded"}
          />
          {/* Horizontal line */}
          <div className="bg-black h-[1px] w-full my-2"></div>

          <div className="w-full bg-white border-2 p-[0.7rem] my-4 rounded-md outline-none text-md shadow-[0px 1px 15px rgba(0, 0, 0, 0.2)] ">
            SignIn With Google
          </div>
          <div className="w-full bg-white border-2 p-[0.7rem] my-4 rounded-md outline-none text-md shadow-[0px 1px 15px rgba(0, 0, 0, 0.2)] ">
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
