import React, {
  createContext,
  useContext,
  useEffect,
  useState
} from "../../_snowpack/pkg/react.js";
import authService from "../services/AuthService.js";
const CurrentUserContext = createContext(null);
export function CurrentUserProvider({children}) {
  const [user, setUser] = useState(authService.storedUser);
  useEffect(() => {
    authService.changeHandler = setUser;
    return () => {
      authService.changeHandler = null;
    };
  });
  return /* @__PURE__ */ React.createElement(CurrentUserContext.Provider, {
    value: user
  }, children);
}
export default function useCurrentUser() {
  return useContext(CurrentUserContext);
}
