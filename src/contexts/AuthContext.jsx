import { createContext, useState } from "react";
import { user as initialUser } from "../components/services/localStorage";

const AuthContext = createContext();

// const token = localStorage.getItem("token");
// const decoded = token ? jwt_decode(token) : {};
// //  jwt_decode(token) คือการแกะรหัส
// console.log(decoded);
//..............................ย้ายไป localStorage
function AuthContextProvider({ children }) {
  const [user, setUser] = useState(initialUser);
  // check ว่ามี token ไหม ถ้ามีก็ jwt_decode(token) ถ้าไม่ก็ {}
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };
