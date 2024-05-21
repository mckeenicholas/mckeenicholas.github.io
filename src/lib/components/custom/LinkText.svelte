<script lang="ts">
  export let href: string;
</script>

<a
  {href}
  class={`underline hover:text-muted-foreground ${$$restProps.class || ""}`}
>
  <slot />
</a>
