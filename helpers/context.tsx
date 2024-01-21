"use client";
import axios from "axios";
import { useState, useEffect, createContext, useContext } from "react";
import { usePathname } from "next/navigation";

interface ContextProps {
  children: React.ReactNode;
}
interface GCProps {
  user: any;
}

export const GlobalContext = createContext<any | GCProps>({
  user: undefined,
});

export const GlobalApiProvider = ({ children }: ContextProps) => {
  const pathname = usePathname();
  const authentic = pathname && ["/signin", "/signup"].includes(pathname);
  const [loggedUser, setLoggedUser] = useState<any>(undefined);
  const [otherUsers, setOtherUsers] = useState<any>(undefined);
  const [posts, setPosts] = useState([]);

  // Logged User Fetching
  useEffect(() => {
    axios.get("/api/user").then((res: any) => {
      setLoggedUser(res.data.user);
    });

    // All user fetching
    axios.get("/api/user/alluser").then((res: any) => {
      setOtherUsers(res.data);
    });
  }, []);

  // Fetching All The Thread Posts
  useEffect(() => {
    axios.get("/api/threadpost").then((res: any) => {
      setPosts(res.data.data);
    });
  }, []);

  return (
    <GlobalContext.Provider
      value={{ authentic, loggedUser, otherUsers, posts }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
