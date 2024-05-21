<script lang="ts">
  import LinkText from "$lib/components/custom/LinkText.svelte";
  import { Mail } from "lucide-svelte";
</script>

<div class="flex place-content-center">
  <div class="text-center">
    <h1 class="my-4 scroll-m-20 text-2xl font-bold tracking-tight">
      You can reach me at:
    </h1>
    <div>
      <LinkText
        class="inline-flex items-center text-lg"
        href="mailto:nicholas.mckee@mail.utoronto.ca"
      >
        <Mail class="me-2 w-[1.3rem]" />
        nicholas.mckee@mail.utoronto.ca
      </LinkText>
    </div>
  </div>
</div>
