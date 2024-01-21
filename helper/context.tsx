"use client";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import { usePathname } from "next/navigation";

interface ContextProps {
  children: React.ReactNode;
}

interface GCProps {
  userData: any;
  posts: any[];
  allUser: any[];
  loading: boolean;
  setLoading: (val: boolean) => void;
  setPosts: SetStateAction<Dispatch<any[]>>;
  authentic: any;
}

export const GlobalContext = createContext<GCProps>({
  userData: undefined,
  posts: [],
  allUser: [],
  loading: false,
  setLoading: () => {},
  setPosts: () => {},
  authentic: false,
});

export const GlobalApiProvider = ({ children }: ContextProps) => {
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState<any>(undefined);
  const [allUser, setAllUser] = useState<any>(undefined);
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const pathname = usePathname();

  const authentic = pathname && ["/signin", "/signup"].includes(pathname);

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
    <GlobalContext.Provider
      value={{
        userData,
        posts,
        allUser,
        loading,
        setLoading,
        setPosts,
        authentic,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
