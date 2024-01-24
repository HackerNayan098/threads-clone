"use client";
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { BiSolidImageAdd } from "react-icons/bi";
import { CldUploadWidget } from "next-cloudinary";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Image from "next/image";
import axios from "axios";

const UpdateProfile = () => {
  const router = useRouter();
  const [profilePic, setProfilePic] = useState("");
  const [updateProfileName, setUpdateProfileName] = useState("");
  const [updateProfileBio, setUpdateProfileBio] = useState("");

  const updateUserProfile = async (e: any) => {
    e.preventDefault();
    try {
      await axios
        .post("/api/updateProfile", {
          name: updateProfileName,
          profileBio: updateProfileBio,
          profileImg: profilePic,
        })
        .finally(() => router.push("/"));
    } catch (error: any) {
      console.log("post not added", error.message);
    }
  };

  const handleUpload = useCallback((result: any) => {
    setProfilePic(result.info.secure_url);
  }, []);

  return (
    <div className="bg-white p-4 h-full">
      <div className=" grid lg:grid-cols-2 grid-cols-1 gap-2">
        <div className="flex flex-col items-center justify-center text-center">
          <CldUploadWidget
            onUpload={handleUpload}
            uploadPreset="nozftypf"
            options={{ maxFiles: 1 }}
          >
            {({ open }) => {
              return (
                <div
                  onClick={() => open?.()}
                  className="text-center relative flex justify-center items-center rounded-full border-2 text-gray-400  h-36 w-36 cursor-pointer"
                >
                  {profilePic && (
                    <div className="w-full h-full absolute inset-0">
                      <Image
                        className=" rounded-full"
                        fill
                        objectFit="cover"
                        alt="upload"
                        src={profilePic}
                      />
                    </div>
                  )}
                  <div>
                    <BiSolidImageAdd
                      size={50}
                      className="mx-auto text-center"
                    />
                  </div>
                </div>
              );
            }}
          </CldUploadWidget>
        </div>
        <div className="">
          <Input
            type="text"
            placeholder="change your fullname"
            name="name"
            value={updateProfileName}
            onChange={(e) => setUpdateProfileName(e.target.value)}
          />
          <Input type="text" placeholder="change username" name="username" />
          <textarea
            className="w-full outline-0 dark:bg-transparent p-4 rounded-2xl text-lg border-[1px] border-gray-400"
            rows={8}
            placeholder="Add Your Profile Bio"
            name="name"
            value={updateProfileBio}
            onChange={(e) => setUpdateProfileBio(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div className="py-8 flex justify-center">
        <Button
          btnTitle={"Update Profile"}
          btnCss={
            "lg:w-[350px] w-full bg-primary text-white px-2 py-2.5 rounded"
          }
          onClick={(e: any) => updateUserProfile(e)}
        />
      </div>
    </div>
  );
};

export default UpdateProfile;
