<script lang="ts">
  import { type CarouselAPI } from "$lib/components/ui/carousel/context.js";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import { MapPin } from "lucide-svelte";

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

  let innerWidth = 0;
  $: isSmall = innerWidth < 770;

  const images = [
    {
      src: "/DSC00429.JPG",
      alt: "Sunset over Vernazza",
      location: "Cinque Terre, Italy",
    },
    {
      src: "/DSC00625.JPG",
      alt: "Waves on the coastline",
      location: "Cinque Terre, Italy",
    },
    {
      src: "/DSC01253.JPG",
      alt: "View over a canal",
      location: "Venice, Italy",
    },
    {
      src: "/DSC01477.JPG",
      alt: "Cat on a porch",
      location: "Moulay Idriss Zerhoun, Morocco",
    },
    { src: "/DSC02689.JPG", alt: "Desert camp", location: "" },
    { src: "/DSC02692.JPG", alt: "Camel", location: "" },
    {
      src: "/DSC03849.jpg",
      alt: "Mallard",
      location: "San Juan Capistrano, California",
    },
    {
      src: "/DSC04048.JPG",
      alt: "End of Route 66",
      location: "Santa Monica, California",
    },
    {
      src: "/DSC04094.JPG",
      alt: "Santa Monica Pier",
      location: "Santa Monica, California",
    },
    {
      src: "/DSC04434.jpg",
      alt: "The Getty",
      location: "Los Angeles, California",
    },
    { src: "/DSC05609.JPG", alt: "Cardinal" },
    { src: "/DSC07085.JPG", alt: "Bracken the dog", location: "" },
    {
      src: "/DSC08435.JPG",
      alt: "Night under the stars",
      location: "Cimarron, New Mexico",
    },
    {
      src: "/DSC09821.JPG",
      alt: "Horseshoe Bend",
      location: "Grand Canyon, Arizona",
    },
  ];
</script>

<svelte:window bind:innerWidth />
<div class="mb-4 flex justify-center">
  <h1 class="my-2 scroll-m-20 text-lg tracking-tight">
    A small collection of photos I've taken:
  </h1>
</div>
<div class="flex justify-center">
  <div>
    <Carousel.Root class="max-w-2xl" bind:api>
      <Carousel.Content>
        {#each images as { src, alt, location }}
          <Carousel.Item>
            <div class="flex h-full items-center justify-center">
              <div class="flex flex-col items-center justify-center">
                <img
                  {src}
                  {alt}
                  class="mb-2 rounded-lg border border-secondary"
                />
                <p class="mb-2 text-center text-sm text-muted-foreground">
                  {alt}
                </p>
                {#if location}
                  <div class="flex flex-row items-center">
                    <MapPin class="me-2 text-muted-foreground" />
                    <p class="text-center text-sm text-muted-foreground">
                      {location}
                    </p>
                  </div>
                {/if}
              </div>
            </div>
          </Carousel.Item>
        {/each}
      </Carousel.Content>
      <div>
        {#if !isSmall}
          <Carousel.Previous />
          <Carousel.Next />
        {/if}
      </div>
    </Carousel.Root>
    <div class="py-2 text-center text-sm text-muted-foreground">
      {current} of {count}
    </div>
  </div>
</div>

<style>
  img {
    max-height: 65vh;
    max-width: 95%;
    width: auto;
  }
</style>
