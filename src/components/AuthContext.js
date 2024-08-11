// AuthContext.js
import React, { createContext, useState, useContext } from "react";
import Dashhome from "./Dashhome";
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [dahpage, setdahpage] = useState(<Dashhome />);
  const [dashsing, setdashsign] = useState(false);
  const [isloged, setloged] = useState(false);
  const [admin, setdmin] = useState(false);
  const [user, setUser] = useState(null);
  const [data, setData] = useState([]);
  const [confirmed, setConfirmed] = useState(false);
  const [Vconfirm, setVconfirm] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        dahpage,
        setdahpage,
        dashsing,
        setdashsign,
        isloged,
        setloged,
        admin,
        setdmin,
        user,
        setUser,
        data,
        setData,
        confirmed,
        setConfirmed,
        Vconfirm, setVconfirm,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthContext }; // Export the context for use in other components
