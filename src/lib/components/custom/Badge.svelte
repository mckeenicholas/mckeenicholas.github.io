<script lang="ts">
  export let logo: string;
  export let label: string;
  export let fill: string;
  export let color: "white" | "black";
</script>

<img
  src={`https://img.shields.io/badge/${label}-${fill}?style=for-the-badge&logo=${logo}&logoColor=${color}`}
  class="my-1 rounded-md"
  alt={label}
/>
