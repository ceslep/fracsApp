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
        src="./set-fracciones.jpg"
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
          width="50%"
          src="./problemasSuma/cocina.png"
          alt=""
        />
      </div>
      <p class="text-justify">
        Un pastelero desea hacer un pastel que requiere de 1/3 de taza de azúcar
        y 1/2 taza de harina. 
      </p>
      <p class="text-justify">
        ¿Cuántas tazas de cada ingrediente necesitará si
        quiere hacer 3 pasteles?
      </p>
      <p class="text-justify">
        Si desea hacer 3 pasteles, necesitará 3/3 x 1/3 = 1/1 de taza de azúcar. Y para la harina necesitará 3/3 x 1/2 = 3/2 de taza. 
      </p>
       <p class="text-justify">
        Entonces necesitará 1/1 de taza de azúcar y 3/2 de taza de harina.
       
    </p>
    </div>
  </div>
</div>

<style>
  .text-justify {
    text-align: justify;
  }
</style>
