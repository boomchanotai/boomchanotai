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
      topic: "Interned @ VISTEC, IST",
      info: "Interned at VISTEC, IST as Full-Stack Web Developer",
      subinfo: "1 March 2021 - 30 April 2021, 273 Hours",
    },
    {
      icon: <HiCommandLineOutline class="w-8 h-8" />,
      topic: "Interned @ StartDee, Software Engineer",
      info: "Interned at StartDee as Software Engineer",
      subinfo: "26 February 2022 - 22 July 2022",
    },
    {
      icon: <BsFiletypeJsx class="w-8 h-8" />,
      topic: "Part-time Frontend Developer @ DoubleDev",
      info: "Co-founder of DoubleDev, a web development agency",
      subinfo: "2021 - Present",
    },
    {
      icon: <BsController class="w-8 h-8" />,
      topic: "Part-time Frontend Developer @ Gamlytics",
      info: "Part-time Frontend Developer at Gamlytics, a game analytics platform",
      subinfo: "May 2023 - Present",
    },
  ];

  return (
    <Container class="py-8 space-y-6">
      <h2 class="text-2xl font-bold">My Experiences</h2>
      <div class="grid grid-cols-2 gap-6">
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
