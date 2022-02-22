import React, { useEffect, useState } from "react";
import { BASE_URL } from "./routes/routes";
import axios from "axios";
import SideInfo from "./components/SideInfo/SideInfo";
import Exchange from "./components/Exchange/Exchange";
import backgroundImg from "./assets/img/Vector.svg";
import "./App.css";

const App = () => {
  const [curencyToUah, setCurencyToUah] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}?base=UAH&symbols=USD,EUR`).then(({ data }) => {
      setCurencyToUah(data.rates);
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="container-wrapper">
          <img
            className="container-backgroundImg"
            src={backgroundImg}
            alt="vector"
          />
          <Exchange />
          <SideInfo curencyToUah={curencyToUah} />
        </div>
      </div>
    </>
  );
};

export default App;
