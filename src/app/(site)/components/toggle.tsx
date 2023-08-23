"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

import { Button } from "./ui/button";
export function ModeToggle() {
  const { setTheme } = useTheme();
  const [modeTheme, setModeTheme] = useState("light");
  const [icon, setIcon] = useState({});
  const handlClick = (mode: string) => {
    setModeTheme(mode === "light" ? "dark" : "light");
    setIcon(mode === modeTheme ? <Moon /> : <Sun />);
    setTheme(modeTheme);
  };

  return (
    <>
      {modeTheme === "light" ? (
        <Button
          onClick={() => handlClick("light")}
          variant={"outline"}
          size={"icon"}
        >
          <Sun />
        </Button>
      ) : (
        <Button
          onClick={() => handlClick("dark")}
          variant={"outline"}
          size={"icon"}
        >
          <Moon />
        </Button>
      )}
    </>
  );
}
