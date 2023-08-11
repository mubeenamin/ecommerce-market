"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

import { Button } from "./ui/button";


export function ModeToggle() {
  const { setTheme } = useTheme();
  const [mode, setMode] = useState("light");
  const [icon, setIcon] = useState(<Sun/>);
  const handlClick = () => {
    setMode(mode === "light" ? "dark" : "light");
    setTheme(mode);
    setIcon(mode === "light" ? <Moon /> : <Sun />);
    
  };

  return (
    
    <>
      <Button onClick={handlClick} variant={"outline"} size={"icon"}>
        {icon}
      </Button>
    </>
  );
}
