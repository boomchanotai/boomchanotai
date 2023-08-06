import { component$, useTask$ } from "@builder.io/qwik";
import Container from "~/components/Container";
import fs from "fs";

import matter from "gray-matter";
import { routeLoader$ } from "@builder.io/qwik-city";

export const getArticle = routeLoader$(({ params }) => {
  const { slug } = params;
  const res = fs.readFileSync(`./src/articles/${slug}.md`, "utf-8");
  const article = matter(res);

  return {
    slug,
    data: article.data,
    content: article.content,
  };
});

export default component$(() => {
  const article = getArticle();

  return (
    <Container class="py-8 space-y-4">
      <h2 class="text-2xl font-bold">{article.value.data.title}</h2>
      <p>{article.value.data.description}</p>

      <p>{article.value.content}</p>
    </Container>
  );
});
