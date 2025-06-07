<script lang="ts">
  import { page } from "$app/state";

  interface Props {
    href: string;
    text: string;
    callbackfn?: () => void | null;
  }

  let { href, text, callbackfn = () => null }: Props = $props();

  let selected = $derived(page.url.pathname === href);
</script>

<a {href} onclick={callbackfn}>
  <div
    class="text-md rounded-md px-2 py-1 font-medium transition-colors hover:bg-secondary hover:text-primary"
    class:text-primary={selected}
    class:text-muted-foreground={!selected}
  >
    {text}
  </div>
</a>
