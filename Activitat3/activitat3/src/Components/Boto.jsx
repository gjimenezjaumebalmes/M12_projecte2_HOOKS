
export const Boto = (props) => {

  return (
    <div className="Boto">
      <button onClick={(value = 1) => { {props.var} }}>Increase</button>
      <button onClick={(value = -1) => { {props.var2} }}>Decrease</button>
      <button onClick={(value = 0) => { {props.var3} }}>Reset</button>
    </div>
  );
}