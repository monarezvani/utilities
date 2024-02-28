import { useState } from "react";

export const useLocalStorage = (key: string, value: string) => {
  const [itemInLocalStorage, getItemInLocalStorage] = useState(() => {
    if (typeof window === "undefined") return value;
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : value;
    } catch (error: any) {
      throw new Error(error.message);
    }
  });
  const setValueInLocalStorage = (value: string) => {
    try {
      getItemInLocalStorage(value);
      if (typeof window !== "undefined") {
        return localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error: any) {
      if (typeof window === "undefined") {
        console.error(error);
        return value;
      }
    }
  };

  return [itemInLocalStorage, setValueInLocalStorage];
};
