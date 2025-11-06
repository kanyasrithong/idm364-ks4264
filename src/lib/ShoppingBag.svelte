<script>
  import shoppingBag from '$lib/assets/icons/shopping-bag.svg'
</script>

<a href="/">
  <img src={shoppingBag} alt="Shopping bag icon">
  <span>1</span>
</a>

<style>
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
  }

  a span {
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: black;
    border-radius: 100%;
    color: white;
    font-size: 8px;
    height: 1rem;
    width: 1rem;
    text-decoration: none;

    position: absolute;
    top: 24px;
    right: 18px;

  }

  a img {
    height: 48px;
  }

  a:visited {
    text-decoration: none;
  }
</style>