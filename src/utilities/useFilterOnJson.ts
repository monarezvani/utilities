import { useState } from "react";

interface IFindObjectInJsonProps {
  filterItem: string;
  db: any;
}

export default function useFilterOnJson({
  filterItem,
  db,
  
}: IFindObjectInJsonProps) {;
  const [filteredData, setFilteredDataOnAddress] = useState({});

  const data = JSON.parse(db);

  let filteredObject = {};
  //if we want to find a host that has exact address as the input
  for (const key in data) {
    if (data.hasOwnProperty(key) && data[key] === filterItem) {
      filteredObject = data.find(
        (item: { address: string }) => item.address === filterItem
      );
    }
  }
  setFilteredDataOnAddress(filteredObject);

  return {
    filteredData,
    
  };
}
