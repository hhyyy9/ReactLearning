import "./App.css";
import { Button } from "./components/Button";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Style } from "./components/Style";
import { LoggedIn } from "./states/LoggedIn";
import { User } from "./states/User";
import { FetchData } from "./states/FetchData";
import React from "react";

function App() {
  const personName = {
    first: "Bruce",
    last: "Lee",
  };

  const personList = [
    {
      firstNmae: "111",
      lastNmae: "222",
    },
    {
      firstNmae: "111",
      lastNmae: "222",
    },
    {
      firstNmae: "111",
      lastNmae: "222",
    },
    {
      firstNmae: "111",
      lastNmae: "222",
    },
    {
      firstNmae: "111",
      lastNmae: "222",
    },
    {
      firstNmae: "111",
      lastNmae: "222",
    },
    {
      firstNmae: "111",
      lastNmae: "222",
    },
  ];

  const AppContext = React.createContext<{username: string}>({username:''});




  return (
    <>
    <AppContext.Provider value={{
      username: 'test111'
    }}>
    <div className="App">
      <Greet name="Jacky" messageNumber={9} isLoginIn={false} />
      <Person name={personName} />
      <PersonList names={personList} />
      <Status status={"loading"} />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>
      <Greet name="Vishwas" isLoginIn={true}></Greet>
      <Button
        handleClicked={(event, id) => {
          console.log("Button clicked!", event, id);
        }}
      ></Button>
      <br/>
      <Input value="" handleChange={event => console.log(event)}/>
      <Style styles={{border:'1px solid black', padding:'1rem'}} />
      <LoggedIn />
      <User />
      <FetchData />
      </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
