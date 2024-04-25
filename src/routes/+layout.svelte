<script lang="ts">
  import "../app.pcss";
  import { ModeWatcher } from "mode-watcher";
  import Sun from "lucide-svelte/icons/sun";
  import Moon from "lucide-svelte/icons/moon";
  import { toggleMode } from "mode-watcher";
  import { Button } from "$lib/components/ui/button/index";
  import { cn } from "$lib/utils.js";
  import NavItem from "../lib/custom/NavItem.svelte";
  import Footer from "../lib/custom/Footer.svelte";
  import { Facebook, Github, Instagram, Linkedin } from "lucide-svelte";
  import MenuButton from "$lib/custom/MenuButton.svelte";

  let className: string | undefined | null = undefined;
  export { className as class };

  const navItems = [
    { href: "/", text: "Home" },
    { href: "/projects", text: "Projects" },
    { href: "/about", text: "About" },
  ];

  const icons = [
    { href: "https://github.com/mckeenicholas", icon: Github },
    { href: "https://github.com/mckeenicholas", icon: Linkedin },
    { href: "https://github.com/mckeenicholas", icon: Instagram },
    { href: "https://github.com/mckeenicholas", icon: Facebook },
  ];
</script>

<ModeWatcher />
<div class="flex h-screen flex-col justify-between">
  <div class="flex">
    <div
      class="m-2 flex h-10 grow items-center rounded-lg border border-secondary px-1"
    >
      <nav class={cn("flex items-center space-x-0", className)}>
        {#each navItems as { href, text }}
          <NavItem {href} {text} />
        {/each}
      </nav>
    </div>

    <div class="m-2 ml-0 place-content-end">
      <div class="h-10 rounded-lg border border-secondary p-1">
        {#each icons as { href, icon }}
          <MenuButton {href} {icon} />
        {/each}
      </div>
    </div>

    <div class="m-2 ml-0 place-content-end">
      <Button
        on:click={toggleMode}
        class="h-10 rounded-lg border border-secondary px-3 text-muted-foreground transition-all hover:text-primary"
      >
        <Sun
          class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 dark:-rotate-90 dark:scale-0"
        />
        <Moon
          class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 dark:rotate-0 dark:scale-100"
        />
        <span class="sr-only">Toggle theme</span>
      </Button>
    </div>
  </div>

  <div class="m-2 mb-auto">
    <slot />
  </div>

  <Footer />
</div>
