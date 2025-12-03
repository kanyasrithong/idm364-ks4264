<script lang="js">
  import ShoppingBag from "$lib/components/ShoppingBag.svelte";
</script>

<div id="header">
  <a href="/">
    kanya's things
  </a>
  <ShoppingBag></ShoppingBag>
</div>

<style>
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: white;
    padding: 1rem;
    position: fixed;
    width: 100%;
    z-index: 1001;

    a {
      color: black;
      font-weight: 800;
      font-size: 24px;
      text-decoration: none;
    }

    a:visited {
    text-decoration: none;
  }
  }
</style>
