import { createContext, useState } from "react";

export const ArrayContext = createContext();

export const ArrayProvider = ({ children }) => {
  const [dataSet, setDataSet] = useState([]);

  return (
    <ArrayContext.Provider value={{ dataSet, setDataSet }}>
      {children}
    </ArrayContext.Provider>
  );
};
