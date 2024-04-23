<script lang="ts">
	import Sun from "lucide-svelte/icons/sun";
	import Moon from "lucide-svelte/icons/moon";
	import { toggleMode } from "mode-watcher";
	import { Button } from "$lib/components/ui/button/index.js";
	import { cn } from "$lib/utils.js";

	let className: string | undefined | null = undefined;
	export { className as class };
	
</script>

<div class="flex">
<div class="m-2 rounded-xl border-2 border-secondary px-2 h-12 flex items-center grow">
<nav class={cn("flex items-center space-x-0", className)}>
	<a 
		href="/examples/dashboard"
		>
		<div class="text-md font-medium text-muted-foreground transition-colors hover:text-primary rounded-md hover:bg-secondary px-2 py-1">
				Home
		</div>
		
	</a>

	<a
		href="/examples/dashboard"
	>
	<div class="text-md font-medium text-muted-foreground transition-colors hover:text-primary rounded-md hover:bg-secondary px-2 py-1">
		Projects
	</div>
	</a>
	<a
		href="/examples/dashboard"
	>
	<div class="text-md font-medium text-muted-foreground transition-colors hover:text-primary rounded-md hover:bg-secondary px-2 py-1">
		About
	</div>
	</a>
	<a
		href="/examples/dashboard"
	>
	<div class="text-md font-medium text-muted-foreground transition-colors hover:text-primary rounded-md hover:bg-secondary px-2 py-1">
		GitHub
	</div>
	</a>
</nav>
</div>
<div class="place-content-end m-2 ml-0">
<Button on:click={toggleMode} class="rounded-xl border-secondary border-2 h-12">
	<Sun
	  class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-muted-foreground hover:text-primary"	
	/>
	<Moon
	  class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-muted-foreground hover:text-primary"
	/>
	<span class="sr-only">Toggle theme</span>
  </Button>
</div>
</div>