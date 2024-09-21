export const splitCamelCase = (input: string): string => {
  // Use regex to find lowercase followed by uppercase and replace with "lowercase + space + uppercase"
  const spacedString = input.replace(/([a-z])([A-Z])/g, "$1 $2");

  // Capitalize the first letter of the resulting string
  return spacedString.charAt(0).toUpperCase() + spacedString.slice(1);
};

export const formatFunctionName = (func: Function): string => {
  const functionName = func.name; // Get the name of the function
  return functionName
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space before uppercase letters
    .replace(/^./, (str) => str.toUpperCase()); // Capitalize the first letter
};
