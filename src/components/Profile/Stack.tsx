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
    <Container class="py-8 flex flex-col md:flex-row gap-8 items-start">
      <div class="flex flex-row justify-start items-center gap-4">
        <div class="hidden md:block h-0.5 bg-black dark:bg-white w-16 transition-colors duration-150"></div>
        <h2 class="text-2xl whitespace-nowrap font-bold md:font-normal">
          My Fav Stack
        </h2>
      </div>
      <div class="grid grid-cols-2 lg:flex flex-wrap gap-8">
        {stacks.map(({ title, image }) => (
          <div class="py-1 px-4 flex flex-row gap-4">
            <Image
              src={image}
              layout="constrained"
              class="w-6 h-6"
              alt={title}
            />
            <p>{title}</p>
          </div>
        ))}
      </div>
    </Container>
  );
});
