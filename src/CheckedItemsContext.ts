import React from "react";

export const CheckedItemsContext = React.createContext<{
    checkedItems: Record<string, boolean>;
    setCheckedItems: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  }>({
    checkedItems: {},
    setCheckedItems: () => {},
  });