<script>
  import Fraction from "../../../ShowFractions/Fraction.svelte";

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
      <i
        class="fa-solid fa-file-circle-question me-2 text-icon-color-1"
      />Ejemplo de Problemas
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
          width="150"
          src="./ejemplos/amplificacionYsimplificacion/ejemplo1.png"
          alt=""
        />
      </div>
      <p class="text-justify">
        Un problema que utilice simplificación de fracciones en el contexto de preparación de alimentos podría ser el siguiente:

        Supongamos que quieres preparar una receta de pastel que requiere 2 tazas de harina, 1 taza de azúcar y 1/2 taza de mantequilla. Sin embargo, en tu cocina solo tienes frascos de harina y azúcar de 1 libra cada uno, y una barra de mantequilla de 16 onzas. ¿Cuánto de cada ingrediente necesitarás para preparar la receta?
        
        Para resolver este problema, es necesario utilizar simplificación de fracciones para convertir las tazas a onzas, que es la unidad de medida de los frascos de harina y azúcar y la barra de mantequilla.
        
        2 tazas de harina = 32 onzas
        1 taza de azúcar = 8 onzas
        1/2 taza de mantequilla = 8 onzas (ya que 1/2 taza = 8 onzas)
        Entonces, para preparar la receta, necesitarás 32 onzas de harina, 8 onzas de azúcar y 8 onzas de mantequilla.
        
        Es importante tener en cuenta que deben respetarse las proporciones correctas de los ingredientes ya que cambiarlo puede hacer que el resultado final sea diferente.
      </p>
    </div>
  </div>
</div>

<style>
  .text-justify {
    text-align: justify;
  }

  .text-icon-color-1 {
    color: rgb(255, 250, 111);
  }
</style>
