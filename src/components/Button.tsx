import React from "react";
import { useContext } from "react";

type ButtonProps = {
  handleClicked: (event: React.MouseEvent<HTMLButtonElement>,id:number) => void;
};



export const Button = (props: ButtonProps) => {
  return <button onClick={(event)=> props.handleClicked(event,1)}>Click</button>;
};
