<script lang="ts">
  import '../app.pcss';
  import { ModeWatcher } from 'mode-watcher';
  import Sun from 'lucide-svelte/icons/sun';
  import Moon from 'lucide-svelte/icons/moon';
  import { toggleMode } from 'mode-watcher';
  import { Button } from '$lib/components/ui/button/index.js';
  import { cn } from '$lib/utils.js';
  import NavItem from './NavItem.svelte';

  let className: string | undefined | null = undefined;
  export { className as class };

  const navItems = [
    { href: '/', text: 'Home' },
    { href: '/projects', text: 'Projects' },
    { href: '/about', text: 'About' },
    {
      href: 'https://github.com/mckeenicholas',
      text: 'GitHub',
    },
  ];
</script>

<ModeWatcher />
<div class="flex">
  <div
    class="m-2 flex h-12 grow items-center rounded-xl border-2 border-secondary px-2"
  >
    <nav class={cn('flex items-center space-x-0', className)}>
      {#each navItems as { href, text }}
        <NavItem {href} {text} />
      {/each}
    </nav>
  </div>
  <div class="m-2 ml-0 place-content-end">
    <Button
      on:click={toggleMode}
      class="h-12 rounded-xl border-2 border-secondary"
    >
      <Sun
        class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 text-muted-foreground transition-all hover:text-primary dark:-rotate-90 dark:scale-0"
      />
      <Moon
        class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 text-muted-foreground transition-all hover:text-primary dark:rotate-0 dark:scale-100"
      />
      <span class="sr-only">Toggle theme</span>
    </Button>
  </div>
</div>
<slot />
