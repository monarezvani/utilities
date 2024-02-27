import React from "react";
import "../src/assets/global.css";

import { useBubbleSort } from "../utilities/useBubbleSort";
import { useCalculateMinMaxSum } from "../utilities/useCalculateMinMaxSum";
import FibonacciSequence from "../components/Fibonacci/Fibonacci";
import ReverseWords from "../components/ReverseWords";
import { usePreventDuplicateStrings } from "../utilities/usePreventDuplicateStrings";
import { useThemeContext } from "../context/changeTheme/useThemeContext";
import { Themes } from "../context/changeTheme/Enums";
import { SetInputValueInStorage } from "../components/SetInputValueInStorage";

function App() {
  //arrays which contain departments
  const jobItems = [
    {
      fields: {
        department: {
          fields: "IT",
        },
      },
    },
    {
      fields: {
        department: {
          fields: "Sales",
        },
      },
    },
    {
      fields: {
        department: {
          fields: "Marketing",
        },
      },
    },
  ];
  //we want to push departments into array
  const departmentList = jobItems.map((item: any) => {
    const departmentTitle = item.fields.department.fields.title;
    const departmentArray = [];
    departmentArray.push(departmentTitle);
    return departmentArray;
  });
  //now prevent to duplicate strings
  usePreventDuplicateStrings(departmentList);
  //use bubbleSort to sort ascending
  useBubbleSort([4, 39, 6, 3, 2]);
  //calculate min and max ,k is a number which determine on which element we want to calculate
  const k = 1;
  //n is length of array
  const n = 5;

  const arr = [1, 2, 3, 4, 5];
  useCalculateMinMaxSum(k, n, arr);

  //changing Theme
  const { state, toggleTheme } = useThemeContext();

  return (
    <div
      className="App"
      style={{ backgroundColor: state.background, color: state.foreground }}
    >
      <header className="App-header">
        <button onClick={() => toggleTheme()}>
          {state.background === Themes.light.background ? "Dark" : "Light"}
        </button>
      </header>
      <h1>Fibonacci</h1>
      <FibonacciSequence />
      <h1>Reverse Word</h1>
      <ReverseWords />
      <SetInputValueInStorage />
    </div>
  );
}

export default App;
