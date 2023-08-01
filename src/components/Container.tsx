import { Slot, component$ } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";

interface TContainerProps {
  class?: string;
}

export default component$((props: TContainerProps) => {
  return (
    <div class={twMerge("container mx-auto px-4 sm:px-6 lg:px-8", props.class)}>
      <Slot />
    </div>
  );
});
