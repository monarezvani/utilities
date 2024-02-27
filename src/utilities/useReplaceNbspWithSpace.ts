export const useReplaceNbspWithSpace = (text: string) => {
  return text.replace(/\u00a0/g, " ");
};
