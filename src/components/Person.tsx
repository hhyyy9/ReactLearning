import React, { useContext } from "react";

type Person = {
  name: {
    first: string;
    last: string;
  };
};

const AppContext = React.createContext<{username: string}>({username:''});

export const Person = (props: Person) => {
  const {username} = useContext(AppContext)
  return (
    <div>
      {props.name.first} {props.name.last} | Username: {username}
    </div>
  );
};
