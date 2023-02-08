
export const Button = (props) => {
  return (
    <>
      <button className="Buttons" onClick={props.funcio}>
        {props.name}
      </button>
    </>
  );
};

export const Result = (props) => {
  return (
    <>
      <div>{props.number}</div>
    </>
  );
};

export const Text = (props) => {
  return (
    <>
      <h1>{props.text}</h1>
    </>
  );
};
