const Display = (props) => {
  return (
    <div className="display">
      <div className="fg" style={{ "background-color": props.color }}>
        <h1>{props.heading}</h1>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};
export default Display;
