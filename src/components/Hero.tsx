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
    <div class="relative h-[90vh] md:h-[70vh] bg-gray-900 dark:bg-primary-dark transition-colors duration-150">
      <Image
        src="/images/background.webp"
        layout="constrained"
        class="h-[90vh] md:h-[70vh] aspect-[28/9] opacity-20 object-cover object-top"
        alt="background"
      />
      <Container class="text-white">
        <div class="pt-8 md:pt-0 px-8 md:px-0 absolute top-0 left-0 md:left-auto md:top-1/2 transform md:-translate-y-1/2 md:w-1/2 space-y-8 md:space-y-16">
          <div>
            <div class="text-lg md:text-3xl text-gray-500 text-center md:text-left">
              I'm
            </div>
            <div class="font-bold text-center md:text-left text-3xl md:text-6xl">
              Chanotai <span class="text-accent-yellow">Krajeam</span>
            </div>
          </div>

          <div class="md:w-3/4 text-center md:text-left">
            Hello, I'm <span class="text-accent-yellow">Boom</span>, a web
            developer who loves both{" "}
            <span class="text-accent-red">Frontend & Backend</span>. I'm
            particularly interested in using{" "}
            <span class="text-accent-yellow">Qwik, NextJs, and NestJS</span> as
            my default stack. Thanks!
          </div>
        </div>
        <div class="absolute top-1/3 md:top-1/2 transform -translate-y-1/3 md:-translate-y-1/2 right-0 w-full md:w-1/2">
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

        <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 w-full md:w-auto">
          <Image
            src="/images/boom.webp"
            layout="constrained"
            class="w-full md:w-auto lg:h-[70vh] aspect-[3/4] object-cover object-bottom"
            alt="boomchanotai"
          />
        </div>
      </Container>
    </div>
  );
});
