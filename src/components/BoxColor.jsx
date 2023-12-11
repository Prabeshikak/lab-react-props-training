function BoxColor({ r, g, b }) {
  const boxStyle = {
    width: "600px",
    height: "100px",
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className="box" style={boxStyle}>
      RGB({r},{g},{b})
    </div>
  );
}
export default BoxColor;
