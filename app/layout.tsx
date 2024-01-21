import type { Metadata } from "next";
import "./globals.css";
import Authroutes from "@/components/Authroutes";

export const metadata: Metadata = {
  title: "Thread",
  description: "Thread clone app create by next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`w-full h-screen lg:overflow-hidden`}>
        <Authroutes>{children}</Authroutes>
      </body>
    </html>
  );
}
