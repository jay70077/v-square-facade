"use client";

import { useEffect } from "react";
import Clients from "./Clients";

type ClientsWrapperProps = {
  onClose: () => void;
};

export default function ClientsWrapper({ onClose }: ClientsWrapperProps) {
  useEffect(() => {
    const handleScroll = () => {
      onClose(); // hide when scrolling
       const el = document.querySelector(".clients-section") as HTMLElement;
    if (el) {
      el.style.display = "none";
    }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  return <Clients />;
}