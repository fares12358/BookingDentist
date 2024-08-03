// AuthContext.js
import React, { createContext, useState, useContext } from 'react';
import Dashhome from './Dashhome';
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [dahpage, setdahpage] = useState(<Dashhome />);
  const [dashsing, setdashsign] = useState(false);



  return (
    <AuthContext.Provider value={{dahpage,setdahpage,dashsing, setdashsign}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthContext }; // Export the context for use in other components
