<script lang="ts">
import { toggleMode } from "mode-watcher";
import { Button } from "$lib/components/ui/button";
import Sun from "lucide-svelte/icons/sun";
import Moon from "lucide-svelte/icons/moon";
</script>

<Button
    on:click={toggleMode}
    class="h-[1.9rem] px-2 py-1 text-muted-foreground transition-all hover:text-primary"
>
    <Sun class="h-[1.3rem] w-[1.3rem] rotate-90 scale-0 dark:rotate-0 dark:scale-100"/>
    <Moon class="absolute h-[1.3rem] w-[1.3rem] rotate-0 scale-100 dark:-rotate-90 dark:scale-0"/>
    <span class="sr-only">Toggle theme</span>
</Button>
