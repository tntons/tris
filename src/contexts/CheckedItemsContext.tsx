'use client'

import { useState, createContext, ReactNode } from "react";

interface ICheckedItemsContext {
  setCheckedItems: (items: Record<string, boolean>) => void;
  checkedItems: Record<string, boolean>;
}

const initialState: ICheckedItemsContext = {
  setCheckedItems: (items: Record<string, boolean>) => {},
  checkedItems: {},
};

export const CheckedItemsContext = createContext<ICheckedItemsContext>(initialState);

const CheckedItemsContextProvider = ({ children }: { children: ReactNode }) => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  return (
    <CheckedItemsContext.Provider
      value={{
        setCheckedItems,
        checkedItems,
      }}
    >
      {children}
    </CheckedItemsContext.Provider>
  );
};

export default CheckedItemsContextProvider;