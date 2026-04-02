import React, { useState } from "react";
import useCurrencyInfo from "../hooks/useCurrencyInfo";
import InputBox from "../component/InputBox";

const ConverterForm = () => {
  // handle amount state
  const [amount, setAmount] = useState(1);

  // handle from and to currency state
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(1);

  // get currency info using custom hook
  const currencyInfo = useCurrencyInfo(from);

  // currency options for select dropdown
  const options = Object.keys(currencyInfo);

  //swap handler
  const handleSwap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const handleConvert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      {" "}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleConvert();
        }}
      >
        <div className="w-full mb-1">
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectCurrency={from}
            onAmountChange={(amount) => setAmount(amount)}
          />
        </div>
        <div className="relative w-full h-0.5">
          <button
            type="button"
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-amber-500 text-gray-800 font-bold tracking-[value-0.25] px-2 py-0.5 cursor-pointer hover:bg-amber-600 active:bg-amber-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/80 transition-colors duration-300"
            onClick={handleSwap}
          >
            swap
          </button>
        </div>
        <div className="w-full mt-1 mb-4">
          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            amountDisable
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg cursor-pointer hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300/80 transition-colors duration-300"
        >
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </form>
    </>
  );
};

export default ConverterForm;
