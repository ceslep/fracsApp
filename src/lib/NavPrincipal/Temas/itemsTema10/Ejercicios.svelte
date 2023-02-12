<script>
  const generateImages = () => {
    let imgs = [];
    for (let i = 1; i <= 6; i++) imgs = [...imgs, `./mixtos/${i}.jpg`];
    return imgs;
  };

  let images = generateImages();

  $:console.log(images);
</script>

<div id="carouselExample" class="carousel carousel-dark slide">
  <div class="carousel-inner">
    {#each images as src,index}
      <div class="carousel-item {index==0?'active':''}">
        <img {src} class="d-block w-100" alt="..." />
      </div>
    {/each}
  </div>
  <button
    class="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true" />
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true" />
    <span class="visually-hidden">Next</span>
  </button>
</div>
