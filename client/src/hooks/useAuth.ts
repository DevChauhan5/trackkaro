import { useState } from "react";
import { useLocalStorage } from "usehooks-ts";

const key = "authenticatedUser";

const useAuth = () => {
  const [user, setUser] = useLocalStorage(key, null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const register = (user: any) => {
    setUser(user);
    setIsAuthenticated(true);
  };

  const getUser = () => {
    return user;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return { register, getUser, logout, isAuthenticated };
};

export default useAuth;
