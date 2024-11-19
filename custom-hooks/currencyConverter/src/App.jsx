import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from './hooks/useCurrencyinfo';

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const convert = () => {
    const conversionRate = currencyInfo[to];
    if (conversionRate) {
      setConvertedAmount(amount * conversionRate);
    } else {
      console.error("Conversion rate not available");
    }
  };

  return (
    <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/318820/pexels-photo-318820.jpeg?auto=compress&cs=tinysrgb&w=600')`,
            }}
        >
      <div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="w-full mb-1">
            <InputBox
              label="From"
              amount={amount}
              onAmountChange={setAmount}
              onCurrencyChange={setFrom}
              currencyOptions={options}
              selectCurrency={from}
            />
          </div>
          <div className="relative w-full h-0.5">
            <button
              type="button"
              onClick={() => {
                setFrom(to);
                setTo(from);
                // Optional: You might want to convert after swapping
                convert();
              }}
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
            >
              Swap
            </button>
          </div>
          <div className="w-full mt-1 mb-4">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={setTo} // Use setTo here
              selectCurrency={to} // Ensure this uses 'to'
              amountDisable
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;