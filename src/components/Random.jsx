function Random({ min, max }) {
  let randomNumberInRange;
  if (min !== undefined && max !== undefined) {
    randomNumberInRange = Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    randomNumberInRange = Math.floor(Math.random() * 100) + 1;
  }

  return <div className="random">Random value : {randomNumberInRange}</div>;
}
export default Random;
