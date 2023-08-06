import { component$, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead, RequestHandler } from "@builder.io/qwik-city";
import Hero from "~/components/Hero";
import { getAllArticles, getArticlesById } from "~/utils/getArticles";

export default component$(() => {
  return (
    <>
      <Hero />
    </>
  );
});

export const head: DocumentHead = {
  title: "Boom Chanotai",
  meta: [
    {
      name: "description",
      content: "Boom Chanotai",
    },
  ],
};
