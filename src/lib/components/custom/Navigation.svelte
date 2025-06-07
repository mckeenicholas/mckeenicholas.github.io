<script lang="ts">
  import { Button } from "$lib/components/ui/button/index";
  import { cn } from "$lib/utils.js";
  import NavItem from "./NavItem.svelte";
  import { Facebook, Github, Instagram, Linkedin, Menu } from "lucide-svelte";
  import MenuButton from "$lib/components/custom/MenuButton.svelte";
  import * as Collapsible from "$lib/components/ui/collapsible/index";
  import ModeToggle from "./ModeToggle.svelte";

  interface Props {
    class?: string | undefined | null;
  }

  let { class: className = undefined }: Props = $props();

  let innerWidth = $state(600);
  let isSmall = $derived(innerWidth < 600);

  let collapsibleOpen = $state(false);

  const closeDrawer = () => {
    collapsibleOpen = false;
  };

  // Each page in the navigation bar, without base url added
  const navItems = [
    { href: "/", text: "About" },
    { href: "/projects", text: "Projects" },
    { href: "/contact", text: "Contact" },
    {
      href: "https://teach.cs.utoronto.ca/~mckeenic/resume.pdf",
      text: "Résumé",
    },
    { href: "/photos", text: "Photos" },
  ];

  const icons = [
    { href: "https://github.com/mckeenicholas/", icon: Github },
    {
      href: "https://www.linkedin.com/in/nicholas-mckee-404506252/",
      icon: Linkedin,
    },
    { href: "https://www.instagram.com/nicholasmmckee/", icon: Instagram },
    { href: "https://www.facebook.com/mckeenic/", icon: Facebook },
  ];
</script>

<svelte:window bind:innerWidth />
<div class="flex">
  {#if !isSmall}
    <div
      class="m-2 flex h-10 grow items-center rounded-lg border border-secondary px-1"
    >
      <nav class={cn("flex items-center space-x-0", className)}>
        {#each navItems as { href, text }, idx (idx)}
          <NavItem {href} {text} />
        {/each}
      </nav>
    </div>

    <div class="m-2 ml-0 place-content-end">
      <div class="h-10 rounded-lg border border-secondary p-1">
        {#each icons as { href, icon }, idx (idx)}
          <MenuButton {href} {icon} />
        {/each}
      </div>
    </div>

    <div class="m-2 ml-0 place-content-end">
      <div class="h-10 rounded-lg border border-secondary p-1">
        <ModeToggle />
      </div>
    </div>
  {:else}
    <div class="m-2 grow">
      <Collapsible.Root bind:open={collapsibleOpen}>
        <div class="min-h-10 rounded-lg border border-secondary p-1">
          <Button
            on:click={() => {
              collapsibleOpen = !collapsibleOpen;
            }}
            class="ms-0 h-[1.9rem] px-2 py-1 text-muted-foreground transition-all hover:text-primary"
          >
            <Menu class="w-[1.3rem]" />
          </Button>
          <Collapsible.Content>
            {#each navItems as { href, text }, idx (idx)}
              <NavItem {href} {text} callbackfn={closeDrawer} />
            {/each}
            <hr class="mx-1 mb-2 mt-1.5" />
            <div class="flex grow items-center justify-between">
              <div>
                {#each icons as { href, icon }, idx (idx)}
                  <MenuButton {href} {icon} />
                {/each}
              </div>
              <ModeToggle />
            </div>
          </Collapsible.Content>
        </div>
      </Collapsible.Root>
    </div>
  {/if}
</div>
