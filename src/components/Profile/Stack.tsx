import { component$ } from "@builder.io/qwik";
import Container from "../Container";
import { Image } from "@unpic/qwik";

export default component$(() => {
  const stacks = [
    {
      title: "NextTS",
      image: "https://skillicons.dev/icons?i=nextjs",
    },
    {
      title: "NuxtTs",
      image: "https://skillicons.dev/icons?i=nuxtjs",
    },
    {
      title: "TailwindCSS",
      image: "https://skillicons.dev/icons?i=tailwind",
    },
    {
      title: "Firebase",
      image: "https://skillicons.dev/icons?i=firebase",
    },
    {
      title: "NodeJS",
      image: "https://skillicons.dev/icons?i=nodejs",
    },
    {
      title: "NestTS",
      image: "https://skillicons.dev/icons?i=nestjs",
    },
    {
      title: "Prisma",
      image: "https://skillicons.dev/icons?i=prisma",
    },
    {
      title: "PHP",
      image: "https://skillicons.dev/icons?i=php",
    },
  ];

  return (
    <Container class="py-8 flex flex-row space-x-8 items-start">
      <div class="flex flex-row justify-start items-center space-x-4">
        <div class="h-0.5 bg-black dark:bg-white w-16 transition-colors duration-150"></div>
        <h2 class="text-2xl whitespace-nowrap">My Fav Stack</h2>
      </div>
      <div class="flex flex-wrap gap-8">
        {stacks.map(({ title, image }) => (
          <div class="py-1 px-4 flex flex-row gap-4">
            <Image src={image} layout="constrained" class="w-6 h-6" />
            <p>{title}</p>
          </div>
        ))}
      </div>
    </Container>
  );
});
