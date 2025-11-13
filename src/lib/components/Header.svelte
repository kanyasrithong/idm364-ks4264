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
    padding: 1rem;

    a {
      color: black;
      font-family: Satoshi;
      font-size: 24px;
      text-decoration: none;
    }

    a:visited {
    text-decoration: none;
  }
  }
</style>
