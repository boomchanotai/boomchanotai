import {
  component$,
  Slot,
  useSignal,
  $,
  useVisibleTask$,
} from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";
import { twMerge } from "tailwind-merge";
import Header from "~/components/Header";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  const theme = useSignal<"dark" | "light">("dark");

  useVisibleTask$(() => {
    const themeFromStorage = localStorage.getItem("theme");
    if (!themeFromStorage) {
      localStorage.setItem("theme", theme.value);
    } else {
      theme.value = themeFromStorage as "dark" | "light";
    }
  });

  const toggleTheme = $(() => {
    theme.value = theme.value === "dark" ? "light" : "dark";
    localStorage.setItem("theme", theme.value);
  });

  return (
    <div class={twMerge(theme.value)}>
      <div class="bg-primary-light dark:bg-primary-dark text-black dark:text-white min-h-screen transition-colors duration-150">
        <Header theme={theme.value} toggleTheme={toggleTheme} />
        <main>
          <Slot />
        </main>
      </div>
    </div>
  );
});
