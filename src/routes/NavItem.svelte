<script lang="ts">
  import { page } from '$app/stores';

  export let href: string;
  export let text: string;

  $: selected = $page.url.pathname === href;
</script>

<a {href}>
  <div
    class={`text-md rounded-md px-2 py-1 font-medium transition-colors hover:bg-secondary hover:text-primary ${selected ? 'text-primary' : 'text-muted-foreground'}`}
  >
    {text}
  </div>
</a>
