import { createContext } from "react";

interface AuthContextInterface {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextInterface>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
});

export default AuthContext;
