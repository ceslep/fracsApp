<script>
  import Cuestionario2 from "./Cuestionarios/Cuestionario2.svelte";

  let refresh = true;
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
      Fracción numérica
    </button>
  </h2>
  <div
    id="flush-collapse{id}"
    class="accordion-collapse collapse"
    aria-labelledby="flush-heading{id}"
    data-bs-parent="#accordion"
  >
    <div class="accordion-body">
      <div class="text-center">
        <img src="./fracciondef.gif" class="img-fluid" alt="" />
      </div>
      <p class="text-justify fs-4">
        Las fracciones están formadas por dos números: el numerador y el
        denominador.<br />El <span class="fw-bold">denominador</span> de una
        fracción, que nunca no puede ser cero, indica el número de partes
        iguales en que se divide la unidad.<br /> El
        <span class="fw-bold">numerador</span>, indica las partes iguales que
        tomamos de la cantidad medida.
      </p>
      <h2>Cuestionario</h2>
   
    </div>
  </div>
</div>

<style>
  .text-justify {
    text-align: justify;
  }
</style>
