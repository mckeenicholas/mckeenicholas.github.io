<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import type { Component } from "svelte";

  interface Props {
    href: string;
    icon: Component;
  }

  let { href, icon: Icon }: Props = $props();
</script>

<Button
  class="ms-0 h-[1.9rem] px-2 py-1 text-muted-foreground transition-all hover:text-primary"
  {href}
>
  <Icon class="w-[1.3rem]" />
</Button>
