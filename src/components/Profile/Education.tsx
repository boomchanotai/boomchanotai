import { component$ } from "@builder.io/qwik";
import Container from "../Container";

export default component$(() => {
  const education = [
    {
      school: "Satit Prasarnmit Demonstration School (Secondary)",
      level: "Senior High School",
      major: "Information Technology",
      year: "2562 - 2564",
    },
    {
      school: "Chulalongkorn University",
      level: "Bachelor's Degree",
      major: "Computer Engineering, Faculty of Engineering",
      year: "2565 - Present",
    },
  ];

  return (
    <Container class="py-8 space-y-6">
      <h2 class="text-2xl font-bold">My Education</h2>
      {education.map(({ school, level, major, year }) => (
        <div class="flex flex-col-reverse md:flex-row gap-0 md:gap-8 justify-between items-start px-4">
          <div>
            <h3 class="text-lg font-semibold dark:text-accent-red transition-colors duration-150">
              {school}
            </h3>
            <p>{level}</p>
            <p>{major}</p>
          </div>
          <div class="font-semibold dark:text-accent-yellow transition-colors duration-150">
            {year}
          </div>
        </div>
      ))}
    </Container>
  );
});
