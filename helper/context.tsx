"use client";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";

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
  const [error, setError] = useState(null);
  const [user, setUser] = useState<any>(undefined);
  const [userData, setUserData] = useState<any>(undefined);

  const loginUser = async (users: any) => {
    try {
      const response = await axios.post("/api/user/login", users);
      console.log(response.data.user);

      Cookies.set("userdata", JSON.stringify(response.data.user), {
        expires: 1,
      });
    } catch (err: any) {
      setError(err.response.data.message);
    }
  };

  const session = Cookies.get("userdata");
  console.log(session);

  // Login user
  useEffect(() => {
    if (session) {
      setUser(JSON.parse(session));
    }
  }, [session]);

  useEffect(() => {
    if (user) {
      setUserData(user);
    }
  }, [user]);

  return (
    <GlobalContext.Provider value={{ user, userData, loginUser, setUser }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const { user, userData, loginUser, setUser } = useContext<any>(GlobalContext);

  return { user, userData, loginUser, setUser };
};
