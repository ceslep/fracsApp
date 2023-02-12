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
      <img
        class="rounded-circle"
        width="7%"
        alt=""
        src="./problemasSuma/medicamentos.png"
      />
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
          width="20%"
          src="./problemasSuma/medicamentos.png"
          alt=""
        />
      </div>
      <p class="text-justify">
        Un ejemplo de cómo se puede usar la resta de las fracciones 1/6 y 1/12
        en el uso de medicamentos es al calcular la diferencia entre la dosis
        recomendada de dos medicamentos diferentes. Digamos que el médico
        recomienda tomar 1/6 de una pastilla de medicamento A al día, y luego
        recomienda tomar 1/12 de una pastilla de medicamento B al día. Para
        calcular la diferencia entre las dosis recomendadas, se restarían las
        fracciones para obtener la fracción 1/6 - 1/12 = 2/12. Esto significa
        que la diferencia en las dosis recomendadas es de 2/12 de una pastilla.
      </p>
    </div>
  </div>
</div>

<style>
  .text-justify {
    text-align: justify;
  }
</style>
