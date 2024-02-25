import { useBubbleSort } from './useBubbleSort';

export const useCalculateMinMaxSum = (k: number, n: number, array: number[]):[number, number] => {
  
    useBubbleSort(array);
    let minSum = 0;
    for (let i = 0; i < n - k; i++) {
        minSum += array[i];
    }
    let maxSum = 0;
    for (let i = k; i < n; i++) {
        maxSum += array[i];
    }

    return [minSum, maxSum];
}

