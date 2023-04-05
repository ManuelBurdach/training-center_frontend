import "./sellHumans.css";

const SellHumans = ({ size, setData, baseLink }) => {
  const sellHumans = () => {
    fetch(`${baseLink}/sellHumans`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };

  return (
    <div className="sellHumans">
      <div>
        <h2>Sell Humans</h2>
      </div>
      <div>
        <button onClick={sellHumans} disabled={size < 100 ? "disabled" : ""}>
          Sell all Humans
        </button>
      </div>
    </div>
  );
};

export default SellHumans;
