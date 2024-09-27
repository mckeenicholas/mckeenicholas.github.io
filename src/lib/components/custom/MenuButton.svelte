<script lang="ts">
  import { Button } from "$lib/components/ui/button";

  export let href: string;
  export let icon: any;
</script>

<Button
  class="ms-0 h-[1.9rem] px-2 py-1 text-muted-foreground transition-all hover:text-primary"
  {href}
>
  <svelte:component this={icon} class="w-[1.3rem]" />
</Button>
