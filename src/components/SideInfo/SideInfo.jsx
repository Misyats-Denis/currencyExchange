import React from "react";
import "./sideInfo.css";
import EuroIcon from "../../assets/img/euro.svg";
import DolarIcon from "../../assets/img/dollar.svg";

const SideInfo = ({ curencyToUah }) => {
  return (
    <div className="side-container">
      <h1 className="side-title">For 100 UAH you will get</h1>
      <span className="side-line"></span>
      <div className="side-wrapper">
        <div className="side-item">
          <div className="side-item-info">
            <h3 className="side-item-title">euro</h3>
            <span className="side-item-number">
              {(curencyToUah.EUR * 100).toFixed(2)}
            </span>
          </div>
          <img className="svg" src={EuroIcon} alt="euro"></img>
        </div>
        <div className="side-item">
          <div className="side-item-info">
            <h3 className="side-item-title">dollar</h3>
            <span className="side-item-number">
              {(curencyToUah.USD * 100).toFixed(2)}
            </span>
          </div>
          <img className="svg" src={DolarIcon} alt="dollar"></img>
        </div>
      </div>
    </div>
  );
};

export default SideInfo;
