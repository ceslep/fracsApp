<script>
	import Educaplay from './Educaplay.svelte';
  let refresh;
  export let id;

  let collapseEl;
  const collapse = (el) => {
    // @ts-ignore
    //collapseEl => new bootstrap.Collapse(el);
    el.addEventListener("hidden.bs.collapse", (event) => {
      refresh = true;
    });

    el.addEventListener("shown.bs.collapse", (event) => {
      refresh = false;
    });
  };
</script>

<div class="accordion-item" use:collapse>
  <h2 class="accordion-header" id="flush-heading{id}">
    <button
      class="accordion-button collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#flush-collapse{id}"
      aria-expanded="false"
      aria-controls="flush-collapse{id}"
    >
    <img src="./educaplay.png" alt="" class="img-fluid" width="8%">
      Aprendamos con Educaplay
    </button>
  </h2>
  <div
    id="flush-collapse{id}"
    class="accordion-collapse collapse"
    aria-labelledby="flush-heading{id}"
    data-bs-parent="#accordion"
  >
    <div class="accordion-body">
      <iframe
        title=""
        width="100%"
        height="484"
        id="actividadIF"
        src="//es.educaplay.com/juego/4910250-las_fracciones_representadas.html"
      />
    </div>
  </div>
</div>

<style>
</style>
