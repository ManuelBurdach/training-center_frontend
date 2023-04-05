import "./memory.css";

const Memory = ({ size }) => {
  return (
    <div className="Memory">
      <div>
        <h2>Capacity</h2>
      </div>
      <div className="capacity">
        <div className="size" style={{ height: `${size * 2 + 16}px` }}>
          <p>{size + "%"}</p>
        </div>
      </div>
    </div>
  );
};

export default Memory;
