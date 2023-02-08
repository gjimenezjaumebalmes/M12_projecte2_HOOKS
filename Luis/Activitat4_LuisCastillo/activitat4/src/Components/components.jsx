export const Button = (props) => {
  return (
    <>
      <button className="Buttons" onClick={props.const}>
        {props.name}
      </button>
    </>
  );
};

export const Result = (props) => {
  return (
    <>
      <div> 
        <h1 style={{color: props.colors}}>{props.text} </h1> </div>
    </>
  );
};

