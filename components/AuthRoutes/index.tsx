"use client";
import { useGlobalContext } from "@/helper/context";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const AuthRoutes = ({ children }: { children: React.ReactNode }) => {
  const { user } = useGlobalContext();

  const router = useRouter();
  const patname = usePathname();

  const publicRoutes = ["/signin", "/signup"];

  useEffect(() => {
    if (user) {
      if (!publicRoutes.includes(patname)) router.push("/signin");
    }
  }, [patname]);

  return <>{children}</>;
};

export default AuthRoutes;
