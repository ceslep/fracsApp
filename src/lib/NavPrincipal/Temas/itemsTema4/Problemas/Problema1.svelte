<script>
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
    <img class="rounded-circle" width="7%" alt="" src="./problemasSuma/cocina.png" />
      Ejemplo de problema {no}
    </button>
  </h2>
  <div
    id="collapse{no}"
    class="accordion-collapse collapse"
    aria-labelledby="heading{no}"
    data-bs-parent="#accordionExample"
  >
    <div class="accordion-body">
      <div class="text-center">
        <img
          class="img-fluid"
          width="50%"
          src="./problemasSuma/cocina.png"
          alt=""
        />
      </div>
      <p class="text-justify">
        Un ejemplo de un problema cotidiano en el que se necesite sumar y restar
        fracciones es preparar una receta de cocina que requiera medir
        ingredientes en términos de fracciones de taza. Por ejemplo, si una
        receta requiere 1/4 de taza de harina, 1/3 de taza de azúcar y 1/2 taza
        de mantequilla, podrías sumar las fracciones para determinar la cantidad
        total de ingredientes que necesitas. En este caso, sería 1/4 + 1/3 + 1/2
        = 5/12 de taza. Es necesario hacer una simplificacion antes de sumar:
        5/12 = 10/24 = 5/12
      </p>
    </div>
  </div>
</div>

<style>
  .text-justify {
    text-align: justify;
  }
</style>
