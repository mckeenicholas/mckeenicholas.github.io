<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { cn } from "$lib/utils.js";

  type $$Props = HTMLAttributes<HTMLParagraphElement>;

  interface Props {
    class?: $$Props["class"];
    children?: import("svelte").Snippet;
    [key: string]: any;
  }

  let { class: className = undefined, children, ...rest }: Props = $props();
</script>

<div class={cn("text-sm text-muted-foreground", className)} {...rest}>
  {@render children?.()}
</div>
