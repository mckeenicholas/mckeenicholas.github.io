<script lang="ts">
  import "../app.pcss";
  import { ModeWatcher } from "mode-watcher";
  import { onNavigate } from "$app/navigation";
  import Navigation from "$lib/components/custom/Navigation.svelte";
  import Footer from "$lib/components/custom/Footer.svelte";
  interface Props {
    children?: import("svelte").Snippet;
  }

  let { children }: Props = $props();

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<ModeWatcher defaultMode="dark" />
<div class="flex h-screen flex-col justify-between">
  <Navigation />
  <div class="m-2 mb-auto">
    {@render children?.()}
  </div>
  <Footer />
</div>
