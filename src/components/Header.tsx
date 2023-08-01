import { QRL, component$ } from "@builder.io/qwik";
import Container from "./Container";
import { Link } from "@builder.io/qwik-city";
import { HiMoonOutline, HiSunOutline } from "@qwikest/icons/heroicons";

interface THeaderProps {
  theme: "dark" | "light";
  toggleTheme: QRL<() => void>;
}

export default component$(({ theme, toggleTheme }: THeaderProps) => {
  const menus = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Articles",
      href: "/articles",
    },
    {
      title: "Profile",
      href: "/me",
    },
  ];

  return (
    <div class="bg-secondary-light dark:bg-secondary-dark shadow-lg transition-colors duration-150">
      <Container class="py-8 flex flex-row justify-between items-center">
        <h1 class="font-bold text-2xl">Centosdev</h1>
        <div>
          <ul class="flex flex-row items-center space-x-4">
            {menus.map(({ title, href }) => (
              <Link href={href} class="cursor-pointer">
                <li class="relative py-1 px-4 after:content-[''] after:absolute after:top-full after:left-0 after:w-full after:h-0.5 after:bg-black after:dark:bg-white after:transform after:origin-left after:scale-x-0 after:hover:scale-x-100 after:transition-all after:duration-500 after:ease-in-out">
                  {title}
                </li>
              </Link>
            ))}
            <li>
              <button
                type="button"
                onClick$={() => toggleTheme()}
                class="outline-none"
              >
                {theme === "dark" ? (
                  <HiMoonOutline key={"darkmode"} class="w-5 h-5" />
                ) : (
                  <HiSunOutline key={"lightmode"} class="w-5 h-5" />
                )}
              </button>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
});
