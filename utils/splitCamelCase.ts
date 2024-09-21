export const splitCamelCase = (input: string): string => {
  // Use regex to find lowercase followed by uppercase and replace with "lowercase + space + uppercase"
  const spacedString = input.replace(/([a-z])([A-Z])/g, "$1 $2");

  // Capitalize the first letter of the resulting string
  return spacedString.charAt(0).toUpperCase() + spacedString.slice(1);
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const formatAlgName = (alg: string): string => {
  return alg
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space before uppercase letters
    .replace(/^./, (str) => str.toUpperCase()); // Capitalize the first letter
};
