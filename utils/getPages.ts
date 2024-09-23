import fs from "fs";
import path from "path";

export const getPages = () => {
  // Path to the app directory
  const appDirectory = path.join(process.cwd(), "app");

  // Get all files and directories in the app directory
  const files = fs.readdirSync(appDirectory);

  // Filter out unwanted files
  const pages = files
    .filter((file) => {
      return (
        !file.startsWith("components") &&
        !file.startsWith("favicon") &&
        !file.startsWith("fonts") &&
        !file.startsWith("globals") &&
        !file.startsWith("layout") &&
        file !== "page.tsx"
      );
    })
    .map((file) => file.replace(".tsx", "")); // Remove file extensions

  return pages;
};
