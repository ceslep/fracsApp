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
        src="./problemasSuma/reloj.png"
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
          src="./problemasSuma/reloj.png"
          alt=""
        />
      </div>

      <p class="text-justify">
        Si trabajas media mañana los días lunes, miércoles y jueves en una tarea
        de la universidad, eso sería 3 días x 1/4 día = 3/4 día. Si utilizas
        medio día los martes y viernes para otra tarea de la universidad, eso
        sería 2 días x 1/2 día = 1 día. En total, habrás trabajado 3/4 día + 1
        día = 7/4 día o 1.75 días.
      </p>
    </div>
  </div>
</div>

<style>
  .text-justify {
    text-align: justify;
  }
</style>
