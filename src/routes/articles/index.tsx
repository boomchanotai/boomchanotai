import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import Container from "~/components/Container";

export default component$(() => {
  return (
    <Container class="py-8 min-h-[calc(100vh-_8rem)] flex flex-col justify-center items-center">
      <div class="text-center text-3xl font-semibold">Coming Soon !</div>
    </Container>
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
