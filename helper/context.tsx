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
  const [allUser, setAllUser] = useState<any>(undefined);
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    axios.get("/api/thread").then((res: any) => {
      setPosts(res.data.data);
    });
  }, []);

  // User API'S
  useEffect(() => {
    axios.get("/api/user").then((res: any) => {
      setUserData(res.data);
    });

    axios.get("/api/user/alluser").then((res: any) => {
      setAllUser(res.data);
    });
  }, []);

  return (
    <GlobalContext.Provider value={{ userData, posts, authentic, allUser }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
