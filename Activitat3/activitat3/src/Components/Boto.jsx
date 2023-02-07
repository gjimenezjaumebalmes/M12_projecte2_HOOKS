export const Button = (props) => {
  return (
    <>
      <button className="Buttons" onClick={props.funcio}>{props.name}</button>
    </>
  );
};

export const ComponentResultat = (props) => {
  return (
    <>
      <div>{props.number}</div>
    </>
  );
};
