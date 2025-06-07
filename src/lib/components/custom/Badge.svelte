<script lang="ts">
  interface Props {
    logo: string;
    label: string;
    fill: string;
    color: "white" | "black";
  }

  let { logo, label, fill, color }: Props = $props();
</script>

<img
  src={`https://img.shields.io/badge/${label}-${fill}?style=for-the-badge&logo=${logo}&logoColor=${color}`}
  class="my-1 rounded-md"
  alt={label}
/>
