import { component$ } from "@builder.io/qwik";
import Container from "../Container";
import {
  HiCodeBracketOutline,
  HiCommandLineOutline,
} from "@qwikest/icons/heroicons";
import { BsController, BsFiletypeJsx } from "@qwikest/icons/bootstrap";

export default component$(() => {
  const experiences = [
    {
      icon: <HiCodeBracketOutline class="w-8 h-8" />,
      topic: "VISTEC, IST",
      info: "Interned as Full-Stack Web Developer",
      subinfo: "1 March 2021 - 30 April 2021, 273 Hours",
    },
    {
      icon: <HiCommandLineOutline class="w-8 h-8" />,
      topic: "StartDee.com",
      info: "Interned as Software Engineer",
      subinfo: "26 February 2022 - 22 July 2022",
    },
    {
      icon: <BsFiletypeJsx class="w-8 h-8" />,
      topic: "DoubleDev",
      info: "Co-founder & Part-time Frontend Developer",
      subinfo: "2021 - Present",
    },
    {
      icon: <BsController class="w-8 h-8" />,
      topic: "Gamlytics",
      info: "Part-time Frontend Developer",
      subinfo: "May 2023 - Present",
    },
  ];

  return (
    <Container class="py-8 space-y-6">
      <h2 class="text-2xl font-bold">My Experiences</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experiences.map(({ icon, topic, info, subinfo }) => (
          <div class="px-4 flex flex-row gap-8 items-center">
            <div class="dark:text-accent-red transition-colors duration-150">
              {icon}
            </div>
            <div class="space-y-1">
              <h2 class="font-semibold text-lg">{topic}</h2>
              <p>{info}</p>
              <p class="text-xs text-gray-600 dark:text-gray-400">{subinfo}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
});
