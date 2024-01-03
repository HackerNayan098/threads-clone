"use client";
import { SessionProvider } from "next-auth/react";

const AuthRoutes = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthRoutes;
