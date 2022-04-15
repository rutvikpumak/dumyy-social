import { createContext, useContext, useEffect, useReducer, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [profileModal, setProfileModal] = useState(false);

  return (
    <DataContext.Provider
      value={{
        modal,
        setModal,
        profileModal,
        setProfileModal,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };
