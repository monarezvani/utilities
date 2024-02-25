
export function useMessageDecoder(message_file:string) {
  const messageLines = message_file.split('\n');

  let messageWords :string[]= [];

  messageLines.forEach((line, index) => {
    const [number, word] = line.split(' ');
    const num = parseInt(number);

    if (index === (num * (num + 1)) / 2 - 1) {
      messageWords.push(word);
    }
  });

  return messageWords.join(' ');
}
