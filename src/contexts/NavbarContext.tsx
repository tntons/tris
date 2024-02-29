'use client'

import { useState, createContext, ReactNode, useEffect } from "react";
import { usePathname } from 'next/navigation';

interface INavBarContext {
  isNavBarVisible: boolean;
}

const initialState: INavBarContext = {
  isNavBarVisible: true,
};

export const NavBarContext = createContext<INavBarContext>(initialState);

const NavBarContextProvider = ({ children }: { children: ReactNode }) => {
  const [isNavBarVisible, setIsNavBarVisible] = useState<boolean>(true);
  const pathname = usePathname();

  useEffect(() => {
    setIsNavBarVisible(pathname !== '/register');
  }, [pathname]);

  return (
    <NavBarContext.Provider
      value={{
        isNavBarVisible,
      }}
    >
      {children}
    </NavBarContext.Provider>
  );
};

export default NavBarContextProvider;