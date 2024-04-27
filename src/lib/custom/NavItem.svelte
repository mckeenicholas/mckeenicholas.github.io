<script lang="ts">
  import { page } from "$app/stores";

  export let href: string;
  export let text: string;
  export let callbackfn: () => void | null = () => null;

  $: selected = $page.url.pathname === href;
</script> 

<a {href} on:click={callbackfn}>
  <div
    class={`text-md rounded-md px-2 py-1 font-medium transition-colors hover:bg-secondary hover:text-primary ${selected ? "text-primary" : "text-muted-foreground"}`}
  >
    {text}
  </div>
</a>
