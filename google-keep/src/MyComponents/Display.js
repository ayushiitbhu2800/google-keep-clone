const Display = (props) => {
  return (
    <div className="display">
      <h1>{props.heading}</h1>
      <p>{props.desc}</p>
    </div>
  );
};
export default Display;
