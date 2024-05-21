<script lang="ts">
  import { type CarouselAPI } from "$lib/components/ui/carousel/context.js";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import * as Card from "$lib/components/ui/card/index.js";

  let api: CarouselAPI;
  let count = 0;
  let current = 0;

  $: if (api) {
    count = api.scrollSnapList().length;
    current = api.selectedScrollSnap() + 1;
    api.on("select", () => {
      current = api.selectedScrollSnap() + 1;
    });
  }
</script>

<div class="mb-8 flex justify-center">
  <h1 class="my-4 scroll-m-20 text-lg tracking-tight">
    A small collection of photos I've taken:
  </h1>
</div>
<div class="flex justify-center">
  <div>
    <Carousel.Root class="w-full max-w-xs" bind:api>
      <Carousel.Content>
        {#each Array(5) as _, i (i)}
          <Carousel.Item>
            <div class="p-1">
              <!-- <Card.Root>
            <Card.Content
              class="flex aspect-square items-center justify-center p-6"
            >
              <span class="text-4xl font-semibold">{i + 1}</span>
            </Card.Content>
          </Card.Root> -->
            </div>
          </Carousel.Item>
        {/each}
      </Carousel.Content>
      <Carousel.Previous />
      <Carousel.Next />
    </Carousel.Root>
    <div class="py-2 text-center text-sm text-muted-foreground">
      {current} of {count}
    </div>
  </div>
</div>
