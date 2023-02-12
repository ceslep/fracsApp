<script>
  import { afterUpdate } from "svelte";
  import { TEMA } from "../../../../stores";

  export let id;
  afterUpdate(() => {
    $TEMA = "Que es una fracción";
  });
</script>

<div class="accordion-item">
  <h2 class="accordion-header" id="flush-heading{id}">
    <button
      class="accordion-button collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#flush-collapse{id}"
      aria-expanded="false"
      aria-controls="flush-collapse{id}"
    >
    <img src="./youtube.png" alt="" width="8%">Definición de fracción?
    </button>
  </h2>
  <div
    id="flush-collapse{id}"
    class="accordion-collapse collapse"
    aria-labelledby="flush-heading{id}"
    data-bs-parent="#accordion"
  >
    <div class="accordion-body">
     
      <iframe width="100%" height="40%" src="https://www.youtube.com/embed/7Xvlv3SCA4c" title="TIPOS DE FRACCIONES Super fácil  |  Para principiantes" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      
    </div>
  </div>
</div>


