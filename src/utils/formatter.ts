export const formatToCurrency = (num: number): string => {
  return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

export const sliceText = (number: number, text: string): string => {
  return text.slice(0, number) + (text.length > number ? "..." : "");
};

export const firstLetter = (str: string) => {
  return str.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase());
};
