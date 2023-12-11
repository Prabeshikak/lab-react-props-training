function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  const lastFourDigits = number.slice(-4);
  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
    padding: "20px",
    borderRadius: "10px",
    width: "300px",
    margin: "10px",
  };

  return (
    <div className="card">
      <div style={cardStyle}>
        <div>Type: {type}</div>
        <div>Number: **** **** **** {lastFourDigits}</div>
        <div>
          Expiration: {expirationMonth}/{expirationYear}
        </div>
        <div>Bank: {bank}</div>
        <div>Owner: {owner}</div>
      </div>
    </div>
  );
}

export default CreditCard;
