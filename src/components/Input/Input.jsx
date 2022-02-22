import React from "react";
import { useForm } from "react-hook-form";
import "./input.css";

const Inputs = ({
  currencyOptions,
  selectedCurrency,
  onChangeCurrency,
  amount,
  onChangeAmount,
}) => {
  const { register } = useForm();
  return (
    <div className="input">
      <form>
        <input
          className="form-input"
          {...register("amount")}
          onChange={onChangeAmount}
          type="number"
          value={amount}
        />
        <select
          className="form-select"
          {...register("val")}
          value={selectedCurrency}
          onChange={onChangeCurrency}
        >
          {currencyOptions.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default Inputs;
