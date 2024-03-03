type pensonListProps = {
  names: {
    firstNmae: string;
    lastNmae: string;
  }[];
};

export const PersonList = (props: pensonListProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h3 key={name.firstNmae}>
            {name.firstNmae} {name.lastNmae}
          </h3>
        );
      })}
    </div>
  );
};
