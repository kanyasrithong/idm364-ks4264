<script>
	import ItemCard from "$lib/components/ItemCard.svelte";

</script>

<div>
  <ItemCard/>
  <ItemCard/>
  <ItemCard/>
  <ItemCard/>
  <ItemCard/>
  <ItemCard/>
  <ItemCard/>
  <ItemCard/>
  <ItemCard/>
  <ItemCard/>
</div>

<style>
  div {
    box-sizing: border-box;
    display: grid;
    grid: repeat(4, auto) / repeat(3, minmax(0,1fr));
    gap: 10px;
    padding: var(--header-height) 0.5rem 0;
    width: 100vw;
  }
</style>

