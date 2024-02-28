import { useState } from "react";

export default function useTransformJsonToArray({ response }: any) {
  const [transformedData, setTransformedData] = useState([{}]);

  if (!response) return;

  if (response) {
    const data = response.json();
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
