const Car = ({ color, wheels, features }) => {
  const handleClick = (content) => {
    alert(content);
  };
  return (
    <div>
      I am car, <span id="collor">{color}</span> in color and have {wheels}{" "}
      wheels. Features=
      {features[0]},{features[1]}
      <br />
      <input type="text" id="txt"></input>
      <button
        onClick={() => {
          handleClick(document.getElementById("txt").value);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default Car;
