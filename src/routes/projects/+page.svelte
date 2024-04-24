<script lang="ts">
  import ProjectCard from '$lib/custom/ProjectCard.svelte';
</script>

<div class="flex place-content-center">
  <div class="max-w-6xl grow">
    <h1
      class="mb-8 mt-4 scroll-m-20 text-center text-3xl font-bold tracking-tight"
    >
      My Projects:
    </h1>

    <ProjectCard title="test project 1" desc="test desc">
      body for proj 1
    </ProjectCard>

    <ProjectCard title="test project 2" desc="test desc 2">
      body for proj 2
    </ProjectCard>
  </div>
</div>
