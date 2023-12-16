"use client";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function signupPage() {
  const router = useRouter();
  const [seePass, setSeePass] = useState(false);
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    username: "",
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
      const response = await axios.post("/api/register", user);
      console.log("Signup success", response.data);
      router.push("/");
    } catch (error: any) {
      console.log("signup failed", error.message);
    }
  };
  return (
    <div className="signin w-full h-full flex items-center justify-center">
      <div className="form text-center lg:w-96 w-full bg-white p-6 rounded-xl">
        <h3 className="font-semibold text-2xl">Register</h3>
        <form>
          <Input
            type="text"
            placeholder="enter your name"
            name="name"
            value={user.name}
            onChange={(e) => handleChnage(e)}
          />
          <Input
            type="number"
            placeholder="enter your Phone Number"
            name="phone"
            value={user.phone}
            onChange={(e) => handleChnage(e)}
          />
          <Input
            type="text"
            placeholder="enter your email"
            name="email"
            value={user.email}
            onChange={(e) => handleChnage(e)}
          />
          <Input
            type="text"
            placeholder="enter your username"
            name="username"
            value={user.username}
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
            btnTitle={"Register"}
            cssClass={" w-full bg-blue-500 text-white py-2.5 rounded"}
          />
          <p className="mt-4">Do you have an account ?</p>
          <Link href={"/signin"}>Login Here</Link>
        </form>
      </div>
    </div>
  );
}
