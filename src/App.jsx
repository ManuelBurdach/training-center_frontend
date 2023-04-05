// --------------------------------------------------- IMPORTS
import { useEffect, useState } from "react";
import "./App.css";

import SellHumans from "./components/sellHumans/sellHumans.jsx";
import Memory from "./components/memory/memory.jsx";
import AddHumans from "./components/addHumans/addHumans.jsx";
import Transaktion from "./components/transaktion/transaktion";

// --------------------------------------------------- CONSTS
const BASELINK = "http://localhost:9999";
const API_VERSION = "/api/v1";

// --------------------------------------------------- APP
function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`${BASELINK + API_VERSION}/account`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="App">
      <p className="accountBalance">{data?.accountBalance} $</p>
      <section className="flex">
        <AddHumans setData={setData} baseLink={`${BASELINK + API_VERSION}`} />
        <Memory size={data?.humansCounter} />
        <SellHumans
          size={data?.humansCounter}
          setData={setData}
          baseLink={`${BASELINK + API_VERSION}`}
        />
      </section>
      <Transaktion what={"Add Humans"} data={data?.humansHistory} />
      <Transaktion what={"Sell Humans"} data={data?.sellHistory} />
    </div>
  );
}

export default App;
