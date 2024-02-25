import React from 'react';
import "../src/assets/global.css";

import { useBubbleSort } from './utilities/useBubbleSort';
import { useCalculateMinMaxSum } from './utilities/useCalculateMinMaxSum';
import FibonacciSequence from './components/Fibonacci';
import ReverseWords from './components/ReverseWords';
import { usePreventDuplicateStrings } from './utilities/usePreventDuplicateStrings';

function App() {
 
  //arrays which contain departments 
  const jobItems = [
    {'fields':{
      department:{
        fields:'IT'
      }
    }},
    {'fields':{
      department:{
        fields:'Sales'
      }
    }},
    {'fields':{
      department:{
        fields:'Marketing'
      }
    }}
  ]
  //we want to push departments into array
  const departmentList=
  jobItems
  .map((item: any) => {
    const departmentTitle = item.fields.department.fields.title;
    const departmentArray = [];
    departmentArray.push(departmentTitle);
    return departmentArray;
  }
  )
//now prevent to duplicate strings
  usePreventDuplicateStrings(departmentList)
//use bubbleSort to sort ascending
  useBubbleSort([4,39,6,3,2])
//calculate min and max ,k is a number which determine on which element we want to calculate
const k = 1;
//n is length of array
const n = 5;

const arr = [1, 2, 3, 4, 5];
  useCalculateMinMaxSum(k, n, arr);



  return (
    <div className="App">
      <header className="App-header">
        <h1>Fibonacci</h1>
       <FibonacciSequence/>
       <h1>Reverse Word</h1>
      <ReverseWords/>
      </header>
    </div>
  );
}

export default App;
 