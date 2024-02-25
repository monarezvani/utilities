import React, { useState } from 'react';

const FibonacciSequence = () => {
    const [a1, setA1] = useState(0);
    const [a2, setA2] = useState(0);
    const [n, setN] = useState(0);
    const [result, setResult] = useState(0);

    const calculateNthElement = () => {
        if (n < 1 || n > 10) {
            alert('Please enter a valid value for n (1 to 10).');
            return;
        }

        let current = a2;
        let previous = a1;

        for (let i = 3; i <= n; i++) {
            const temp = current;
            current = current + previous;
            previous = temp;
        }

        setResult(current);
    };

    return (
        <div>
            <h2>Fibonacci-like Sequence</h2>
            <label>
                a1:
                <input type="number" value={a1} onChange={(e) => setA1(parseInt(e.target.value, 10))} />
            </label>
            <br />
            <label>
                a2:
                <input type="number" value={a2} onChange={(e) => setA2(parseInt(e.target.value, 10))} />
            </label>
            <br />
            <label>
                n:
                <input type="number" value={n} onChange={(e) => setN(parseInt(e.target.value, 10))} />
            </label>
            <br />
            <button onClick={calculateNthElement}>Calculate</button>
            <br />
            {result !== null && <p>The {n}-th element is: {result}</p>}
        </div>
    );
};

export default FibonacciSequence;
