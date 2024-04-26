import AuthContext from "@/context/authContext";
import { useContext } from "react";
import { useLocalStorage } from "usehooks-ts";

const key = "authenticatedUser";

const useAuth = () => {
  const [user, setUser] = useLocalStorage(key, null);
  const { setIsAuthenticated } = useContext(AuthContext);
  const login = (user: any) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return { login, user, logout };
};

export default useAuth;
