export const usePrintText = (text: string, ms: number): Promise<string> => {
  const interval = ms;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(text);
    }, interval);
  });
};
