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
        src="./problemasSuma/calendario.png"
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
          src="./problemasSuma/calendario.png"
          alt=""
        />
      </div>
      <p class="text-justify">
        Si queremos saber cuánto tiempo en meses representa 1/4 del
        año más 1/6 del año, podemos sumar las fracciones:
       </p>
       <p class="text-justify">
        1/4 del año + 1/6 del
        año = 3/12 + 2/12 = 5/12 del año
        
    </p>
    <p class="text-justify">En términos de meses, 5/12 del año
        equivale a 5 meses. Entonces, 1/4 del año más 1/6 del año representa 5
        meses.
      </p>
    </div>
  </div>
</div>

<style>
  .text-justify {
    text-align: justify;
  }
</style>
