import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../routes/routes";
import Inputs from "../Input/Input";
import Polygon from "../../assets/img/Polygon.png";
import Polygon2 from "../../assets/img/Polygon2.png";
import Rectangle from "../../assets/img/Rectangle.png";
import "./exchange.css";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

const Exchange = () => {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountFromCurrency, setAmountFromCurrency] = useState(true);

  let toAmount, fromAmount;
  if (amountFromCurrency) {
    fromAmount = amount;
    toAmount = (amount * exchangeRate).toFixed(2);
  } else {
    toAmount = amount;
    fromAmount = (amount / exchangeRate).toFixed(2);
  }

  useEffect(() => {
    axios.get(BASE_URL).then(({ data }) => {
      const defaultCurrency = Object.keys(data.rates)[147];
      setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
      setFromCurrency(data.base);
      setToCurrency(defaultCurrency);
      setExchangeRate(data.rates[defaultCurrency]);
    });
  }, []);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      axios
        .get(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
        .then(({ data }) => {
          setExchangeRate(data.rates[toCurrency]);
        });
    }
  }, [fromCurrency, toCurrency]);
  const onFromChangeCurrency = (e) => {
    const value = e.target.value;
    setFromCurrency(value);
  };

  const onToChangeCurrency = (e) => {
    const value = e.target.value;
    setToCurrency(value);
  };

  const handleFromAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
    setAmountFromCurrency(true);
  };

  const handleToAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
    setAmountFromCurrency(false);
  };

  return (
    <div className="exchenge">
      <div className="exchenge-wrapper">
        <h3 className="exchenge-title">Choose your currency</h3>

        <Inputs
          currencyOptions={currencyOptions}
          selectedCurrency={fromCurrency}
          onChangeCurrency={onFromChangeCurrency}
          amount={fromAmount}
          onChangeAmount={handleFromAmountChange}
        />
        <div className="exchenge-icon-container">
          <FaRegArrowAltCircleDown className="exchenge-icon" />
          <FaRegArrowAltCircleDown className="exchenge-icon" />
        </div>
        <img src={Polygon} alt="pol" className="pol-1" />
        <img src={Polygon2} alt="pol" className="pol-2" />
        <img src={Rectangle} alt="pol" className="pol-3" />
        <Inputs
          currencyOptions={currencyOptions}
          selectedCurrency={toCurrency}
          onChangeCurrency={onToChangeCurrency}
          amount={toAmount}
          onChangeAmount={handleToAmountChange}
        />
      </div>
    </div>
  );
};

export default Exchange;
