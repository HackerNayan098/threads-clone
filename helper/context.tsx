"use client";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { usePathname } from "next/navigation";

interface ContextProps {
  children: React.ReactNode;
}

interface GCProps {
  user: any;
}

export const GlobalContext = createContext<any | GCProps>({
  user: undefined,
  setUser: () => {},
  userData: undefined,
  loginUser: (val: any) => {},
});

export const GlobalApiProvider = ({ children }: ContextProps) => {
  const pathname = usePathname();

  const authentic = pathname && ["/signin", "/signup"].includes(pathname);

  const [error, setError] = useState(null);
  const [userData, setUserData] = useState<any>(undefined);

  useEffect(() => {
    axios.get("/api/user").then((res: any) => {
      setUserData(res.data);
    });
  }, []);

  return (
    <GlobalContext.Provider value={{ userData, authentic }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
