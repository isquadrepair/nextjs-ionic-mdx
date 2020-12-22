import fs from "fs";
import path from "path";
import matter from "gray-matter";

const root = process.cwd();
export const getFileNames = (directory, fileExtension) => {
  const directoryPath = path.join(root, directory);
  return fs
    .readdirSync(directoryPath)
    .filter((fileName) => fileName.endsWith(fileExtension))
    .map((fileName) => fileName.replace(fileExtension, ""));
};

export const getPageProps = (
  directory: string,
  fileName: string,
  fileExtension: string
) => {
  const filePath = path.join(root, directory, fileName + fileExtension);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContents);
  return {
    slug: fileName,
    content,
    data,
  };
};

export const getAllPagesProps = (directory, fileExtension) =>
  getFileNames(directory, fileExtension)
    .map((fileName) => getPageProps(directory, fileName, fileExtension))
    // sort posts by date in descending order
    .sort((page1, page2) => (page1.data.date > page2.data.date ? -1 : 1));

export const getPagePaths = (directory, fileExtension: string) =>
  getFileNames(directory, fileExtension).map((fileName) => ({
    params: { slug: fileName },
  }));
