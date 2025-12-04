<script lang="js">
  let { title, primaryImage, secondaryImage } = $props();
</script>

<a href="/products/{title}">
  <div>
    <h2>{title}</h2>
    <img id="primary-image" src={primaryImage} alt="">
    <img id="secondary-image" class="hidden" src={secondaryImage} alt="">
    <h1>$111</h1>
  </div>
</a>

<style>
  div {
    display: flex;
    flex-direction: column;

    aspect-ratio: 0.8 / 1;
    background-color: #111111;
    color: white;
    padding: 1rem;
    position: relative;
    width: 100%;
  }

  div:hover {
    cursor: pointer;
  }

  h1 {
    display: inline-flex;
    flex-direction: row-reverse;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  }

  img {
    object-fit: scale-down;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: 0 auto;
    height: 100%;
    width: 100%;
  }

  .hidden {
    display: none;
  }

  .show {
    display: block;
  }
</style>
