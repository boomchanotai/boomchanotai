import { component$ } from "@builder.io/qwik";
import {
  BsFacebook,
  BsLinkedin,
  BsGithub,
  BsLine,
} from "@qwikest/icons/bootstrap";
import Container from "./Container";
import { Image } from "@unpic/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  const socials = [
    {
      icon: <BsFacebook class="w-8 h-8" />,
      href: "https://www.facebook.com/ChanotaiKrajeam",
    },
    {
      icon: <BsLinkedin class="w-8 h-8" />,
      href: "https://www.linkedin.com/in/boomchanotai",
    },
    {
      icon: <BsGithub class="w-8 h-8" />,
      href: "https://github.com/boomchanotai",
    },
    {
      icon: <BsLine class="w-8 h-8" />,
      href: "https://line.me/ti/p/YwTf542ohg",
    },
  ];

  return (
    <div class="relative h-[70vh] bg-gray-900 dark:bg-primary-dark transition-colors duration-150">
      <Image
        src="/background-1.jpeg"
        layout="constrained"
        class="h-[70vh] aspect-[28/9] opacity-20 object-cover object-top"
      />
      <Container class="text-white">
        <div class="absolute top-1/2 transform -translate-y-1/2 w-1/2 space-y-16">
          <div>
            <div class="text-3xl text-gray-500">I'm</div>
            <div class="font-bold text-left text-6xl">
              Chanotai <span class="text-accent-yellow">Krajeam</span>
            </div>
          </div>

          <div class="w-3/4">
            Hello, I'm <span class="text-accent-yellow">Boom</span>, a web
            developer who loves both{" "}
            <span class="text-accent-red">Frontend & Backend</span>. I'm
            particularly interested in using{" "}
            <span class="text-accent-yellow">Qwik, NextJs, and NestJS</span> as
            my default stack. Thanks!
          </div>
        </div>

        <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20">
          <Image
            src="/boom-1.png"
            layout="constrained"
            class="h-[70vh] aspect-[3/4] object-cover object-bottom"
          />
        </div>

        <div class="absolute top-1/2 transform -translate-y-1/2 right-0 w-1/3">
          <div class="text-center space-x-6 text-gray-300 flex flex-row justify-center items-center">
            {socials.map(({ icon, href }) => (
              <Link
                href={href}
                class="hover:text-white cursor-pointer transition duration-150"
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
});
