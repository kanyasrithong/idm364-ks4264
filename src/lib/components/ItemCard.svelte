<script lang="js">
  import angelWings from "$lib/assets/images/angel-wings.png";
</script>

<div>
  <h2>Angel Wings</h2>
  <img src={angelWings} alt="">
  <img src="" alt="">
  <h1>$111</h1>
</div>

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
</style>