export const usePreventDuplicateStrings = (itemsArray:any[]) => {
  itemsArray
    .flat()
    .reduce((unique: string[], title: string) => {
      if (!unique.includes(title)) {
        unique.push(title);
      }
      return unique;
    }, [])
}


