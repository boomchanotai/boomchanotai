import fs from "fs";

const getAllArticles = () => {
  const files = fs
    .readdirSync("./src/articles", "utf-8")
    .filter((fn) => fn.endsWith(".md"));
  return files;
};

const getArticlesById = async (id: string) => {
  const content = await import(`./../articles/${id}.md`);
  return content;
};

export { getAllArticles, getArticlesById };
