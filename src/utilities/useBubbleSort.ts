export function useBubbleSort(arr: number[]): number[] {
  const sortedArray = [...arr]; 

  for (let i = 0; i < sortedArray.length; i++) {
      for (let j = 0; j < sortedArray.length - i - 1; j++) {
          if (sortedArray[j] > sortedArray[j + 1]) {
              // Swap elements if they are in the wrong order
              const temp = sortedArray[j];
              sortedArray[j] = sortedArray[j + 1];
              sortedArray[j + 1] = temp;
          }
      }
  }

  return sortedArray;
}