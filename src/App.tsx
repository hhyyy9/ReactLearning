import "./App.css";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";

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

  return (
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
    </div>
  );
}

export default App;
