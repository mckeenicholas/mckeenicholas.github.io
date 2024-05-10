<script lang="ts">
  let innerWidth = 0;
  $: height = Math.min(1030, (innerWidth - 20) * (11 / 8.5));
</script>

<svelte:window bind:innerWidth />
<div class="my-4 flex place-content-center">
  <iframe
    title="resume"
    src="https://drive.google.com/file/d/1r2ubnUCGyLOX7mrMN0tSzlkWHU0o7bbt/preview"
    allow="autoplay"
    width="800"
    {height}
    class="flex"
  ></iframe>
</div>
