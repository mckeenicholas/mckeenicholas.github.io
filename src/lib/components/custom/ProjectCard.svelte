<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card/index";
  import * as Collapsible from "$lib/components/ui/collapsible/index";
  import * as Tooltip from "$lib/components/ui/tooltip/index";
  import { ChevronDown, SquareArrowOutUpRight, Code } from "lucide-svelte";

  let open = $state(false);

  interface Props {
    title: string;
    sourceLink?: string | null;
    demoLink?: string | null;
    desc?: import("svelte").Snippet;
    content?: import("svelte").Snippet;
  }

  let {
    title,
    sourceLink = null,
    demoLink = null,
    desc,
    content,
  }: Props = $props();
</script>

<div class="my-4">
  <Collapsible.Root bind:open class="grow">
    <Card.Root class="grow pb-1">
      <Card.Header class="-mb-4">
        <Button
          on:click={() => (open = !open)}
          variant="ghost"
          class="-m-4 mb-0 flex justify-normal p-0"
        >
          <Card.Title class="m-2 grow">
            <div class="flex">
              <div class="flex grow pt-0.5 align-middle">{title}</div>
              <ChevronDown
                class={`h-6 w-6 place-content-end transition-transform duration-200 ${!open && "rotate-180"}`}
              />
            </div>
          </Card.Title>
        </Button>
        <Card.Description>
          <div class="flex">
            <div class="-ms-3 -mt-1 flex grow">
              {@render desc?.()}
            </div>
            <div class="-me-1.5 place-content-end">
              {#if sourceLink}
                <Tooltip.Root openDelay={0}>
                  <Tooltip.Trigger>
                    <Button
                      class="ms-0 h-[1.9rem] px-2 py-1 text-muted-foreground transition-all hover:text-primary"
                      href={sourceLink}
                    >
                      <Code class="w-[1.3rem]" />
                    </Button>
                  </Tooltip.Trigger>
                  <Tooltip.Content>View Source</Tooltip.Content>
                </Tooltip.Root>
              {/if}
              {#if demoLink}
                <Tooltip.Root openDelay={0}>
                  <Tooltip.Trigger>
                    <Button
                      class="ms-0 h-[1.9rem] px-2 py-1 text-muted-foreground transition-all hover:text-primary"
                      href={demoLink}
                    >
                      <SquareArrowOutUpRight class="w-[1.3rem]" />
                    </Button>
                  </Tooltip.Trigger>
                  <Tooltip.Content>View Demo</Tooltip.Content>
                </Tooltip.Root>
              {/if}
            </div>
          </div>
        </Card.Description>
      </Card.Header>
      <Collapsible.Content>
        <Card.Content class="pb-2">
          {@render content?.()}
        </Card.Content>
      </Collapsible.Content>
    </Card.Root>
  </Collapsible.Root>
</div>
