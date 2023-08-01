import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import Education from "~/components/Profile/Education";
import Experiences from "~/components/Profile/Experiences";
import Hero from "~/components/Hero";
import Project from "~/components/Profile/Project";
import Stack from "~/components/Profile/Stack";

export default component$(() => {
  return (
    <>
      <Hero />
      <Education />
      <Stack />
      <Experiences />
      <Project />
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
