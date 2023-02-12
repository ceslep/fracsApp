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
          src="./ejemplos/amplificacionYsimplificacion/cultivo.png"
          alt=""
        />
      </div>
      <p class="text-justify">
        Imagina que un agricultor tiene un campo de 20 hectáreas, y quiere
        cultivar maíz en el 75% del campo. Para calcular cuántas hectáreas debe
        utilizar para cultivar maíz, puede convertir el 75% en una fracción
        (75/100) y luego simplificarla dividiendo ambos términos por 25 (el
        factor común). El resultado sería 75/100 = 3/4 de hectárea. Entonces el
        agricultor tendría que cultivar en 15 hectáreas de las 20 que tiene.
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
