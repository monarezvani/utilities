import { useState } from "react";

interface IReverseWord {
  inputLines: string;
  MAX_LINE_LENGTH: number;
}
export const useReverseWord = ({
  inputLines,
  MAX_LINE_LENGTH,
}: IReverseWord) => {
  const [outputLines, setOutputLines] = useState("");

  const linesArray = inputLines.split("\n");

  if (linesArray.length > MAX_LINE_LENGTH) {
    alert("number of lines exceed the limit");
  } else {
    const reversedLinesArray = linesArray.map((line) => {
      const word = line.split(" ");
      const reversedWord = word.reverse();
      return reversedWord.join(" ");
    });

    const reversedLines = reversedLinesArray.join("\n");
    setOutputLines(reversedLines);
  }

  return { outputLines };
};
