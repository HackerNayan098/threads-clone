"use client";
import axios from "axios";
import {
  useState,
  useEffect,
  createContext,
  useContext,
  SetStateAction,
  Dispatch,
} from "react";
import { usePathname } from "next/navigation";
import { User, Post } from "@/constant";

interface ContextProps {
  children: React.ReactNode;
}
interface GCProps {
  authentic: boolean | any;
  loggedUser: User | null;
  otherUsers: User[] | null;
  setOtherUsers: SetStateAction<Dispatch<User[]>>;
  posts: Post[];
  setPosts: SetStateAction<Dispatch<Post[]>>;
  loading: boolean;
  setLoading: (val: boolean) => void;
}

export const GlobalContext = createContext<GCProps>({
  authentic: false,
  loggedUser: null,
  otherUsers: [],
  setOtherUsers: () => {},
  posts: [],
  setPosts: () => {},
  loading: false,
  setLoading: () => {},
});

export const GlobalApiProvider = ({ children }: ContextProps) => {
  const pathname = usePathname();
  const authentic = pathname && ["/signin", "/signup"].includes(pathname);
  const [loggedUser, setLoggedUser] = useState<User | null>(null);
  const [otherUsers, setOtherUsers] = useState<User[] | null>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Logged User Fetching
  useEffect(() => {
    axios.get("/api/user").then((res: any) => {
      setLoggedUser(res.data.user);
    });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        authentic,
        loggedUser,
        otherUsers,
        posts,
        setPosts,
        loading,
        setLoading,
        setOtherUsers,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
