type Person = {
  name: {
    first: string;
    last: string;
  };
};

export const Person = (props: Person) => {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  );
};
