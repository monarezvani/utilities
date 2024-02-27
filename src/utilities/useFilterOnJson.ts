import { useState } from "react";

interface IFindObjectInJsonProps {
  address: string;
  db: any;
}

export default function useFilterOnJson({
  address,
  db,
}: IFindObjectInJsonProps) {
  const [transformedData, setTransformedData] = useState([
    { id: "", host: "", server: "" },
  ]);
  const [filteredDataOnAddress, setFilteredDataOnAddress] = useState({});

  const data = JSON.parse(db);
  const transformedDataList = [];
  //if we want to have a list of json file we use following

  for (const key in data) {
    transformedDataList.push({
      id: key,
      host: data[key].host,
      server: data[key].server,
    });
  }
  setTransformedData(transformedDataList);

  let filteredData = {};
  //if we want to find a host that has exact address as the input
  for (const key in data) {
    if (data.hasOwnProperty(key) && data[key] === address) {
      filteredData = data.find(
        (item: { address: string }) => item.address === address
      );
    }
  }
  setFilteredDataOnAddress(filteredData);

  return {
    transformedData,
    filteredDataOnAddress,
  };
}
