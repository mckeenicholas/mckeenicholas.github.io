<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    href: string;
    children?: Snippet;
    class?: string;
  }

  let { href, children, class: className }: Props = $props();
</script>

<a {href} class={`underline hover:text-muted-foreground ${className || ""}`}>
  {@render children?.()}
</a>
