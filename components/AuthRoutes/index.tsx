"use client";
import { GlobalApiProvider } from "@/helpers/context";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import Header from "../Header";
import Leftbar from "../Leftbar";
import Rightbar from "../Rightbar";

const index = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <ThemeProvider
        defaultTheme="light"
        enableSystem={false}
        attribute="class"
      >
        <GlobalApiProvider>
          <Header />
          <div className="main-container bg-[#f0eef6] dark:bg-stone-950 dark:text-light lg:h-[calc(100vh_-_84px)] lg:grid lg:grid-cols-5 gap-4 p-4">
            <section className="lg:col-span-1">
              <Leftbar />
            </section>
            <section className="lg:col-start-2 lg:col-span-3 overflow-y-auto">
              {children}
            </section>
            <section className="col-span-1 lg:py-0 py-8">
              <Rightbar />
            </section>
          </div>
        </GlobalApiProvider>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default index;
