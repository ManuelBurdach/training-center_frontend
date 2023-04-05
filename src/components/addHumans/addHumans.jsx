import { useState } from "react";
import "./addHumans.css";

const AddHumans = ({ setData, baseLink }) => {
  const manyHumans = [1, 5, 10];
  const [error, setError] = useState(false);

  const addHumans = (many) => {
    fetch(`${baseLink}/addHumans`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ humans: many }),
    })
      .then((res) => res.json())
      .then((data) => {
        setError(data.err);
        setData(data);
      });
  };

  return (
    <div className="AddHumans">
      <div>
        <h2>Add Humans</h2>
      </div>
      <div>
        <button
          onClick={() => {
            addHumans(manyHumans[0]);
          }}
        >
          +
        </button>
        <p>{manyHumans[0]} Human</p>
      </div>
      <div>
        <button
          onClick={() => {
            addHumans(manyHumans[1]);
          }}
        >
          +
        </button>
        <p>{manyHumans[1]} Human</p>
      </div>
      <div>
        <button
          onClick={() => {
            addHumans(manyHumans[2]);
          }}
        >
          +
        </button>
        <p>{manyHumans[2]} Human</p>
      </div>
      <div className="error">
        {error === false ? "" : "The capacity is overloaded, sell humans"}
      </div>
    </div>
  );
};

export default AddHumans;
