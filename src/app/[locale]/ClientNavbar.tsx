'use client';
import { useContext } from 'react';
import { NavBarContext } from "@/contexts/NavbarContext";
import NavBar from "../../components/Nav";

export default function ClientNavBar() {
  const { isNavBarVisible } = useContext(NavBarContext);

  return isNavBarVisible ? <NavBar /> : null;
}