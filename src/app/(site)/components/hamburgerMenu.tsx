"use client";
import { StateMachineInput, useRive, useStateMachineInput } from "rive-react";

export default function HamBurgerMenu() {
  const STATE_MACHINE_NAME = "Basic State Macine";
  const INPUT_NAME = "Switch";
  const { rive, RiveComponent: RiveComponentTouch } = useRive({
    src: "hamburger_time_new.riv",
    stateMachines: STATE_MACHINE_NAME,
    artboard: "New Artboard",
    autoplay: true
  });
  const pressedInput:any = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    INPUT_NAME,

  );
  return <RiveComponentTouch  className="w-8 h-8" onClick={() => pressedInput.fire()} />;
}
