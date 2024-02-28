import { useState } from "react";

interface IFindObjectInJsonProps {
  db: any;
}

export default function useTransformJsonToArray({ response }: any) {
  const [transformedData, setTransformedData] = useState([{}]);
  let data = response.json();
  if (!data) return;
  if (data) {
    data = JSON.parse(response);

    const transformedDataList = [];
    //if we want to have a list of json file we use following

    for (const key in data) {
      transformedDataList.push({
        id: key,
        address: data[key].address,

        ...data[key],
      });
    }
    setTransformedData(transformedDataList);
  }
  return {
    transformedData,
  };
}
