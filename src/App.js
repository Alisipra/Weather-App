import { useState } from "react";
import "./App.css";
import { lo, num, sym, up } from "./Format";

function App() {
  let [upperCase, setUppercase] = useState(false);
  let [LowerCase, setLowercase] = useState(false);
  let [numbers, setNumbers] = useState(false);
  let [symbols, setSymbols] = useState(false);
  let [passlen, setPasslen] = useState(8);
  let [fpass, setFpass] = useState("");
  let charSet = "";
  let finalPass = "";
  const genPassword = () => {
    if (upperCase || LowerCase || numbers || symbols) {
      if (upperCase) charSet += up;
      if (LowerCase) charSet += lo;
      if (numbers) charSet += num;
      if (symbols) charSet += sym;
      for (let i = 0; i < passlen; i++) {
        finalPass += charSet.charAt(Math.floor(Math.random() * charSet.length));
      }
      setFpass(finalPass);
    } else {
      alert("please select at least One field...");
    }
  };
  const copyPass = () => {
    navigator.clipboard.writeText(fpass);
  };
  return (
    <>
      <div className="passwordBox">
        <h1> Password Generator</h1>
        <div className="passShow">
          <input type="text" readOnly value={fpass} />
          <button onClick={copyPass}>Copy</button>
        </div>
        <div className="types">
          <label>Choose Length</label>
          <input
            type="number"
            min={8}
            max={20}
            value={passlen}
            onChange={(event) => setPasslen(event.target.value)}
          />
        </div>
        <div className="checkboxs">
          <label>Upper Case</label>
          <input
            type="checkbox"
            checked={upperCase}
            onChange={() => setUppercase(!upperCase)}
          />
        </div>

        <div className="checkboxs">
          <label>Lower Case</label>
          <input
            type="checkbox"
            checked={LowerCase}
            onChange={() => setLowercase(!LowerCase)}
          />
        </div>

        <div className="checkboxs">
          <label>Numbers</label>
          <input
            type="checkbox"
            checked={numbers}
            onChange={() => setNumbers(!numbers)}
          />
        </div>

        <div className="checkboxs">
          <label>Symbols</label>
          <input
            type="checkbox"
            checked={symbols}
            onChange={() => setSymbols(!symbols)}
          />
        </div>
        <button className="btn" onClick={genPassword}>
          Generate Password
        </button>
      </div>
    </>
  );
}

export default App;
