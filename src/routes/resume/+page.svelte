<script lang="ts">
  let src =
    "https://drive.google.com/file/d/15zS0W8a8A3UDbwj6AR3nxz9TtGZR5A-m/preview";
  let innerWidth = 0;
  $: height = Math.min(1030, (innerWidth - 20) * (11 / 8.5));
</script>

<svelte:window bind:innerWidth />
<div class="my-4 flex place-content-center">
  <iframe
    title="resume"
    {src}
    allow="autoplay"
    width="800"
    {height}
    class="flex"
  ></iframe>
</div>
