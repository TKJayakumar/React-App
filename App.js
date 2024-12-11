import React, { useState } from "react";

const App = () => {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState("");

    const calculate = (op) => {
        const a = Number(num1);
        const b = Number(num2);
        if (!num1 || !num2) return setResult("Enter both numbers");
        if (op === "+") setResult(a + b);
        if (op === "-") setResult(a - b);
        if (op === "*") setResult(a * b);
        if (op === "/") setResult(b !== 0 ? a / b : "Cannot divide by zero");
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Simple Calculator</h1>
            <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                placeholder="Number 1"
                style={{ margin: "5px" }}
            />
            <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                placeholder="Number 2"
                style={{ margin: "5px" }}
            />
            <div>
                <button onClick={() => calculate("+")}>+</button>
                <button onClick={() => calculate("-")}>-</button>
                <button onClick={() => calculate("*")}>*</button>
                <button onClick={() => calculate("/")}>/</button>
            </div>
            {result && <h2>Result: {result}</h2>}
        </div>
    );
};

export default App;
