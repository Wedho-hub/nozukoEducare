/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
