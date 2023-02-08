
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
       {props.name && <h1>{props.text} </h1>}
         </div>
    </>
  );
};


 