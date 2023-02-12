<script>
  import Educaplay from "./../itemsTema1/Educaplay.svelte";
  export let no;
</script>

<div class="accordion-item">
  <h2 class="accordion-header" id="heading{no}">
    <button
      class="accordion-button"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapse{no}"
      aria-expanded="true"
      aria-controls="collapse{no}"
    >
    <img src="./youtube.png" alt="" width="10%">  
    Video Simplificación
    </button>
  </h2>
  <div
    id="collapse{no}"
    class="accordion-collapse collapse"
    aria-labelledby="heading{no}"
    data-bs-parent="#accordionExample"
  >
    <div class="accordion-body">
      <iframe
        width="100%"
        height="40%"
        src="https://www.youtube.com/embed/3HNyVbBNGQQ"
        title="SIMPLIFICAR FRACCIONES super fácil | para principiantes"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      />
    </div>
  </div>
</div>


