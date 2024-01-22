"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import axios from "axios";
import Link from "next/link";
import Input from "@/components/Input";
import Button from "@/components/Button";
const Signup = () => {
  const router = useRouter();
  const [seePass, setSeePass] = useState(false);
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/register", user);
      console.log("Signup successfully", response.data);
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center text-black">
      <div className="lg:w-96 w-full dark:bg-black dark:text-white bg-white p-6 rounded-xl text-center">
        <h3 className="font-semibold text-2xl">Register</h3>
        <form>
          <Input
            type="text"
            placeholder="enter your name"
            name="name"
            value={user.name}
            onChange={(e) => handleChange(e)}
          />
          <Input
            type="text"
            placeholder="enter your phone number"
            name="phone"
            value={user.phone}
            onChange={(e) => handleChange(e)}
          />
          <Input
            type="email"
            placeholder="enter your email"
            name="email"
            value={user.email}
            onChange={(e) => handleChange(e)}
          />
          <Input
            type="text"
            placeholder="enter your username"
            name="username"
            value={user.username}
            onChange={(e) => handleChange(e)}
          />
          <Input
            type={seePass ? "text" : "password"}
            placeholder="enter your password"
            name="password"
            value={user.password}
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
            btnTitle={"Register"}
            disabled={!(user.password && user.email)}
            btnCss={" w-full bg-primary text-white py-2.5 rounded"}
            onClick={(e) => handleSubmit(e)}
          />
          <p className="mt-4">Do you have an account ?</p>
          <Link href={"/signin"}>Login Here</Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
