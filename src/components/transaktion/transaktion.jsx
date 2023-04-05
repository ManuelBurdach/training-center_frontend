import "./transaktion.css";

const Transaktion = ({ what, data }) => {
  data = [...data].reverse();
  return (
    <div className="transaktion">
      <div>
        <h2>Transaktion {what}</h2>
      </div>
      {data?.map((item) => {
        let date = new Date(item.timestamp);
        return (
          <div key={item.timestamp}>
            <h3>{item.manyHumans} x Humans</h3>
            <p>{date.toLocaleDateString()}</p>
            <p>
              {date.getHours()}:{date.getMinutes()}:{date.getSeconds()} Uhr
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Transaktion;
