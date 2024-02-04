import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <h1>Tip Calculator </h1>
      <TipCalculator />
    </div>
  );
}
function TipCalculator() {
  const [billAmt, setBillAmt] = useState("");
  const [numOfPeople, setNumOfPeople] = useState("");
  const [percentage, setPercentage] = useState(5);

  const tip_amt = (billAmt * percentage) / 100;
  const tip_amt_person = tip_amt / numOfPeople;

  const total = billAmt + tip_amt_person;
  const perPersonTotal = total / numOfPeople + tip_amt_person;

  function handleClick() {
    setBillAmt("");
    setNumOfPeople("");
    setPercentage(0);
  }

  return (
    <div>
      <Heading>Bill</Heading>
      <Input1 billAmt={billAmt} onBillAmt={setBillAmt} />
      <Heading>Select %</Heading>
      <Percentage percentage={percentage} onPercentage={setPercentage} />
      <Heading>Number of people</Heading>
      <Input2 numOfPeople={numOfPeople} onPeople={setNumOfPeople} />
      {billAmt > 0 && numOfPeople > 1 && (
        <>
          <Output
            tip_amt={tip_amt_person}
            total={total}
            perPersonTotal={perPersonTotal}
          />
          <Reset handleClick={handleClick} />
        </>
      )}
    </div>
  );
}

function Heading({ children }) {
  return <h1>{children}</h1>;
}

function Input1({ billAmt, onBillAmt }) {
  return (
    <div>
      <input
        type="text"
        value={billAmt}
        onChange={(e) => onBillAmt(Number(e.target.value))}
      />
    </div>
  );
}
function Input2({ numOfPeople, onPeople }) {
  return (
    <div>
      <input
        type="text"
        value={numOfPeople}
        onChange={(e) => onPeople(Number(e.target.value))}
      />
    </div>
  );
}

function Percentage({ percentage, onPercentage }) {
  return (
    <div>
      <select
        value={percentage}
        onChange={(e) => onPercentage(Number(e.target.value))}
      >
        <option value={5}>5%</option>
        <option value={10}>10%</option>
        <option value={15}>15%</option>
        <option value={25}>25%</option>
        <option value={50}>50%</option>
      </select>
    </div>
  );
}

function Output({ tip_amt, total, perPersonTotal }) {
  return (
    <div>
      <h2>Tip Amount per person :{!tip_amt ? "0" : tip_amt}</h2>
      <h2>Total : {total}</h2>
      <h2>Total (Each person) : {perPersonTotal}</h2>
    </div>
  );
}

function Reset({ handleClick }) {
  return <button onClick={handleClick}>Reset</button>;
}
