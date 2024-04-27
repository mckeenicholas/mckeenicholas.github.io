<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card/index";
  import * as Collapsible from "$lib/components/ui/collapsible/index";
  import { ChevronDown } from "lucide-svelte";

  let open = false;

  export let title: string;
  export let desc: string;
</script>

<div class="my-6">
  <Collapsible.Root bind:open={open} class="grow">
    <Card.Root class="-pb-2 grow">
      <Card.Header>
        <Button
          on:click={() => (open = !open)}
          variant="ghost"
          class="-m-4 mb-0 flex justify-normal p-0"
        >
          <Card.Title class="m-4 grow">
            <div class="flex">
              <div class="flex grow">{title}</div>
              <ChevronDown
                class={`h-6 w-6 place-content-end transition-transform duration-200 ${!open && "rotate-180"}`}
              />
            </div>
          </Card.Title>
        </Button>
        <Card.Description>{desc}</Card.Description>
      </Card.Header>
      <Collapsible.Content class="space-y-2">
        <Card.Content>
          <slot />
        </Card.Content>
      </Collapsible.Content>
    </Card.Root>
  </Collapsible.Root>
</div>
