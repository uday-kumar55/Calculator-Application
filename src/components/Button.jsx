function Button({ value, onClick }) {

  return (

    <button
      className={
        value === "AC" || value === "DEL"
          ? "top-btn"
          : value === "="
          ? "equal-btn"
          : value === "+" ||
            value === "-" ||
            value === "x" ||
            value === "/" ||
            value === "%"
          ? "operator-btn"
          : "btn"
      }
      onClick={() => onClick(value)}
    >
      {value}
    </button>

  );

}

export default Button;